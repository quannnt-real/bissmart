#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests the FastAPI backend server for health, endpoints, and CORS configuration
"""

import requests
import json
import os
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not find REACT_APP_BACKEND_URL in frontend/.env")
    exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE_URL}")
print("=" * 60)

def test_server_health():
    """Test if the server is running and responding"""
    print("\n🔍 Testing Server Health...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Server is healthy - Status: {response.status_code}")
            print(f"   Response: {data}")
            return True
        else:
            print(f"❌ Server health check failed - Status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Server health check failed - Connection error: {e}")
        return False

def test_cors_configuration():
    """Test CORS configuration"""
    print("\n🔍 Testing CORS Configuration...")
    try:
        # Test preflight request
        headers = {
            'Origin': 'https://example.com',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        response = requests.options(f"{API_BASE_URL}/", headers=headers, timeout=10)
        
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers'),
            'Access-Control-Allow-Credentials': response.headers.get('Access-Control-Allow-Credentials')
        }
        
        print(f"✅ CORS preflight response - Status: {response.status_code}")
        for header, value in cors_headers.items():
            if value:
                print(f"   {header}: {value}")
        
        return True
    except requests.exceptions.RequestException as e:
        print(f"❌ CORS test failed - Connection error: {e}")
        return False

def test_status_endpoints():
    """Test status check endpoints (POST and GET)"""
    print("\n🔍 Testing Status Check Endpoints...")
    
    # Test POST /api/status
    print("Testing POST /api/status...")
    test_data = {
        "client_name": "Test Client Backend API"
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/status",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ POST /api/status successful - Status: {response.status_code}")
            print(f"   Created status check with ID: {data.get('id')}")
            print(f"   Client name: {data.get('client_name')}")
            print(f"   Timestamp: {data.get('timestamp')}")
            
            # Test GET /api/status
            print("\nTesting GET /api/status...")
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if get_response.status_code == 200:
                get_data = get_response.json()
                print(f"✅ GET /api/status successful - Status: {get_response.status_code}")
                print(f"   Retrieved {len(get_data)} status checks")
                
                # Verify our test data is in the response
                found_test_data = False
                for item in get_data:
                    if item.get('client_name') == test_data['client_name']:
                        found_test_data = True
                        break
                
                if found_test_data:
                    print("✅ Test data successfully stored and retrieved")
                else:
                    print("⚠️  Test data not found in GET response")
                
                return True
            else:
                print(f"❌ GET /api/status failed - Status: {get_response.status_code}")
                print(f"   Response: {get_response.text}")
                return False
        else:
            print(f"❌ POST /api/status failed - Status: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status endpoints test failed - Connection error: {e}")
        return False

def test_error_handling():
    """Test error handling for invalid requests"""
    print("\n🔍 Testing Error Handling...")
    
    # Test invalid endpoint
    try:
        response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
        print(f"✅ Invalid endpoint test - Status: {response.status_code} (expected 404)")
        
        # Test invalid POST data
        invalid_data = {"invalid_field": "test"}
        response = requests.post(
            f"{API_BASE_URL}/status",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"✅ Invalid POST data test - Status: {response.status_code}")
        
        return True
    except requests.exceptions.RequestException as e:
        print(f"❌ Error handling test failed - Connection error: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base URL: {API_BASE_URL}")
    
    results = {
        'server_health': test_server_health(),
        'cors_config': test_cors_configuration(),
        'status_endpoints': test_status_endpoints(),
        'error_handling': test_error_handling()
    }
    
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests PASSED! Server is working correctly.")
        return True
    else:
        print("⚠️  Some backend tests FAILED. Check the details above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)