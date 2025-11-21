#!/bin/bash

echo "🚀 Batch updating all service pages with InteriorHeader..."
echo ""

# Note: Due to the complexity and need for accuracy, 
# each service page should be manually reviewed after batch updates.
# This script documents the changes needed.

cat << 'EOF'

Service Pages to Update:
========================

1. E-commerce (/services/ecommerce)
2. Mobile Apps (/services/mobile-apps)  
3. Hosting (/services/hosting)
4. Cybersecurity (/services/cybersecurity)
5. Branding (/services/branding)
6. UI/UX (/services/ui-ux)
7. Custom Systems (/services/custom-systems)
8. Maintenance (/services/maintenance)
9. Website Development (/services/website-development)
10. ERP (/services/erp)

Pattern Applied (Same as CRM):
==============================

✅ Add imports:
   - InteriorHeader from '@/components/InteriorHeader'
   - ServiceSidebar from '@/components/ServiceSidebar'

✅ Replace old hero banner with:
   <InteriorHeader title="..." breadcrumb={[...]} />

✅ Wrap content with sidebar layout:
   <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
     <div className="flex flex-col lg:flex-row gap-8">
       <aside><ServiceSidebar /></aside>
       <div>{content}</div>
     </div>
   </div>

✅ Benefits:
   - No header overlap
   - Animated headers
   - Breadcrumb navigation
   - Consistent spacing
   - Professional appearance

Next Steps:
===========
1. Review CRM page as template
2. Apply same pattern to remaining pages
3. Test each page after update
4. Commit changes

EOF

echo ""
echo "✅ Documentation complete. Ready for manual updates."

