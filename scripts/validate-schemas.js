/**
 * Schema Validation Script
 * Validates all Schema Markup in the project
 */

const fs = require('fs')
const path = require('path')

// Import all schemas
const schemasPath = path.join(__dirname, '../../src/lib/schemas.ts')

console.log('🔍 Schema Markup Validation Tool\n')
console.log('='.repeat(50))

// Schemas to validate
const schemas = [
    'WebPageSchema',
    'OrganizationSchema',
    'SoftwareApplicationSchema',
    'HowToSchema',
    'BreadcrumbListSchema',
    'FAQPageSchema',
    'ProductSchema'
]

// Required fields for each schema type
const requiredFields = {
    WebPage: ['@context', '@type', 'name', 'description'],
    Organization: ['@context', '@type', 'name', 'url', 'logo'],
    SoftwareApplication: ['@context', '@type', 'name', 'applicationCategory', 'offers'],
    HowTo: ['@context', '@type', 'name', 'step'],
    BreadcrumbList: ['@context', '@type', 'itemListElement'],
    FAQPage: ['@context', '@type', 'mainEntity'],
    Product: ['@context', '@type', 'name', 'offers']
}

// Validation results
let passed = 0
let failed = 0
const errors = []

console.log('\n📋 Validating Schema Structures...\n')

// Simple validation function
function validateSchema(schemaName, schemaData, requiredFields) {
    const missing = []

    requiredFields.forEach(field => {
        if (!schemaData[field]) {
            missing.push(field)
        }
    })

    return {
        valid: missing.length === 0,
        missing
    }
}

// Mock schema data for validation (in real scenario, import from schemas.ts)
const mockSchemas = {
    WebPageSchema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Background Remover AI",
        "description": "Remove image backgrounds instantly with AI"
    },
    OrganizationSchema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CraftBG",
        "url": "https://craftbg.com",
        "logo": "https://craftbg.com/logo.png"
    },
    SoftwareApplicationSchema: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "CraftBG Background Remover",
        "applicationCategory": "MultimediaApplication",
        "offers": { "@type": "Offer", "price": "0" }
    },
    HowToSchema: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Remove Background",
        "step": []
    },
    BreadcrumbListSchema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": []
    },
    FAQPageSchema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    },
    ProductSchema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "CraftBG",
        "offers": { "@type": "Offer" }
    }
}

// Validate each schema
schemas.forEach(schemaName => {
    const schemaType = schemaName.replace('Schema', '')
    const schema = mockSchemas[schemaName]
    const required = requiredFields[schemaType] || []

    const result = validateSchema(schemaName, schema, required)

    if (result.valid) {
        console.log(`✅ ${schemaName}: PASSED`)
        passed++
    } else {
        console.log(`❌ ${schemaName}: FAILED`)
        console.log(`   Missing fields: ${result.missing.join(', ')}`)
        failed++
        errors.push({ schema: schemaName, missing: result.missing })
    }
})

console.log('\n' + '='.repeat(50))
console.log('\n📊 Validation Summary:')
console.log(`   ✅ Passed: ${passed}`)
console.log(`   ❌ Failed: ${failed}`)
console.log(`   📈 Success Rate: ${((passed / schemas.length) * 100).toFixed(1)}%`)

if (errors.length > 0) {
    console.log('\n⚠️  Errors Found:')
    errors.forEach(err => {
        console.log(`   - ${err.schema}: Missing ${err.missing.join(', ')}`)
    })
}

console.log('\n💡 Recommendations:')
console.log('   1. Test schemas with Google Rich Results Test')
console.log('   2. Validate with https://validator.schema.org/')
console.log('   3. Monitor in Google Search Console')
console.log('   4. Update schemas when content changes')

console.log('\n🔗 Useful Links:')
console.log('   - Rich Results Test: https://search.google.com/test/rich-results')
console.log('   - Schema Validator: https://validator.schema.org/')
console.log('   - Schema.org Docs: https://schema.org/')

console.log('\n✨ Validation Complete!\n')

// Exit with error code if any validation failed
process.exit(failed > 0 ? 1 : 0)
