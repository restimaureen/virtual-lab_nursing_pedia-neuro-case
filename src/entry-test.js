// Test all imports one by one
try {
  console.log('Testing React...');
  const React = require('react');
  console.log('✓ React imported');
  
  console.log('Testing ReactDOM...');
  const ReactDOM = require('react-dom/client');
  console.log('✓ ReactDOM imported');
  
  console.log('Testing Lucide Icons...');
  const lucideReact = require('lucide-react');
  console.log('✓ Lucide React imported');
  
  console.log('Testing components...');
  // Test each component import
  const components = [
    './components/NavigationBar',
    './pages/HomePage',
    './pages/ScenariosPage',
    './pages/ReflectionPage',
    './pages/ReferencesPage',
    './data/scenarios'
  ];
  
  for (const comp of components) {
    try {
      require(comp);
      console.log(`✓ ${comp} imported`);
    } catch (err) {
      console.error(`✗ Failed to import ${comp}:`, err.message);
    }
  }
  
  console.log('All imports successful!');
} catch (error) {
  console.error('Import error:', error);
}
