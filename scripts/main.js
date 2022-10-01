let bd = Vars.mods.locateMod("hx");
let fi = bd.root.child("mmod")
    .child("HX 0.0.0.5.zip");
Vars.mods.importMod(fi);