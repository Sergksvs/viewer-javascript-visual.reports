const models = [

    { label : "Office",        urn: "eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJjbGllbnRfaWQiOiJNTGhMT01weGY1NE5IeFJ6TXk5QTNNa3ZFTVYxMlU0VSIsImV4cCI6MTUyOTA0Njc0Miwic2NvcGUiOlsiYnVja2V0OnJlYWQiLCJidWNrZXQ6Y3JlYXRlIiwiZGF0YTpyZWFkIiwiZGF0YTp3cml0ZSJdLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvand0ZXhwNjAiLCJqdGkiOiJMVVpDM2xrbjl3SFk3TjFsMTExQU9hVWF2ZWJpa1lIZ1YzbHRFMnA3amlCSmdSMFRuT2k0VlFXelBhTlFMUTl2In0.bAL9WyYoH_uI24r_zMPkvQ20PEyvr_3VDPdvAqm9IDo"},
    { label : "Church (Revit)",             urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvQ2h1cmNoUmVub3ZhdGlvbjIucnZ0"},
    { label : "SaRang - Struct (Revit)",    urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvU2FSYW5nLVN0cnVjdHVyZS0yMDE1LnJ2dA=="},
    { label : "rme-basic-sample (Revit)",   urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2Qvcm1lX2Jhc2ljX3NhbXBsZV9wcm9qZWN0LnJ2dA=="},
    { label : "Audubon Structure (Revit)",  urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvQXVkb2JvbiUyMC0lMjBTdHJ1Y3R1cmUucnZ0"},

    { label : "Factory (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9Db21wbGV0ZWQlMjBQbGFudCUyMExheW91dCUyMGNvbnN0cnVjdGlvbi5ud2Q="},
    { label : "Gatehouse (Navisworks)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9nYXRlaG91c2UyLm53ZA=="},
    { label : "Trapelo (Navisworks)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvVFJBUEVMTy5ud2Q="},
    { label : "Millenium (Navisworks)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvTWlsbGVuaXVtJTIwU3VwZXJtYXJrZXQubndk"},

    { label : "Lego Man (Fusion)",          urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9sZWdvX2d1eTIwMTQwMTMxMDkxOTU4LmYzZA=="},
    { label : "Utility Knife (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9VdGlsaXR5X0tuaWZlMjAxNDAxMjkxNDAwNDEuZjNk"},
    { label : "Fender Guitar (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6am1hYnVja2V0NC9GZW5kZXJfU3RyYXRfTlguc3RwLmM5ZTZhODg0LWU0NWItNGQ3ZC1iNjcyLTY2NjM1OTVhYTRkOTIwMTQwMjIwMTA0OTA3LmYzZA=="},
    { label : "Go Kart (Fusion)",           urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvZ29rYXJ0LVY0LmYzZA=="},
    { label : "Rally Fighter (Fusion)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvUmFsbHlGaWdodGVyMi5mM2Q="},

    { label : "Whiskey Drinks (DWG)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2Qvd2hpc2tleS1kcmlua3MuZHdn"},
    { label : "Slip Form Paver (DWG)",      urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvU2xpcCUyMEZvcm0lMjBQYXZlci5kd2c="},
    { label : "Engine (DWG)",               urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvRW5naW5lJTIwTUtJSS5kd2c="},

    { label : "AC11 Institute (IFC)",       urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWRza19xdWlja3N0YXJ0L0FDMTEtSW5zdGl0dXRlLVZhci0yLUlGQy5pZmM="},
    { label : "Hunter Residence (SKP)",     urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bG12ZGJnX3Byb2QvTUFUVEhFV19IVU5URS1SRVMtMDRfRVBELnNrcA=="},
];

module.exports = {
   models
}