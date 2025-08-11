// Basic setup for Storefront MCP server requests
const mcpEndpoint = `https://paceathletic.com/api/mcp`;

// Example request using the endpoint
const res4 = await fetch(mcpEndpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'tools/call',
    id: 1,
    params: {
      name: 'search_shop_catalog',
      arguments: { query: 'coffee', "context": "Customer prefers fair trade products" }
    }
  })
});
const  j =(await res4.json())
console.log(JSON.stringify(j, null, 2))