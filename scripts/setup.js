function initializeWeaponProperties() {
    CONFIG.DND5E.weaponProperties['bleeding'] = 'Bluten';
    CONFIG.DND5E.weaponProperties['bypass'] = 'Umgehung';
    CONFIG.DND5E.weaponProperties['captivating'] = 'Fesselnd';
    CONFIG.DND5E.weaponProperties['cavalry'] = 'Kavallerie';
    CONFIG.DND5E.weaponProperties['cutUp'] = 'Zerschneiden';
    CONFIG.DND5E.weaponProperties['fightingLyingDown'] = 'Liegender Kampf';
    CONFIG.DND5E.weaponProperties['finisher'] = 'Finisher';
    CONFIG.DND5E.weaponProperties['fluent'] = 'Fließend';
    CONFIG.DND5E.weaponProperties['gunpowder'] = 'Schießpulver';
    CONFIG.DND5E.weaponProperties['nonFatal'] = 'Nichttödlich';
    CONFIG.DND5E.weaponProperties['parry'] = 'Parieren';
    CONFIG.DND5E.weaponProperties['penetrating'] = 'Durchdringend';
    CONFIG.DND5E.weaponProperties['pierce'] = 'Durchbohren';
    CONFIG.DND5E.weaponProperties['range'] = 'Reichweite';
    CONFIG.DND5E.weaponProperties['recharge'] = 'Aufladen';
    CONFIG.DND5E.weaponProperties['splintering'] = 'Zersplitternd';
    CONFIG.DND5E.weaponProperties['stunning'] = 'Betäubend';
    CONFIG.DND5E.weaponProperties['swinging'] = 'Schwungvoll';
    CONFIG.DND5E.weaponProperties['thrown'] = 'Geworfen';
    CONFIG.DND5E.weaponProperties['variable'] = 'Variabel';
    CONFIG.DND5E.weaponProperties['winged'] = 'Geflügelt';
}

function initializeAmmunitionProperties() {
    CONFIG.DND5E.physicalWeaponProperties['cutUp'] = 'Zerschneiden';
    CONFIG.DND5E.physicalWeaponProperties['nonFatal'] = 'Nichttödlich';
    CONFIG.DND5E.physicalWeaponProperties['penetrating'] = 'Durchdringend';
    CONFIG.DND5E.physicalWeaponProperties['pierce'] = 'Durchbohren';
    CONFIG.DND5E.physicalWeaponProperties['special'] = 'Speziell';
    CONFIG.DND5E.physicalWeaponProperties['stunning'] = 'Betäubend';
}

function initializeArmorProperties() {
    CONFIG.DND5E.armorProperties['armorShit'] = 'Armor Shit';
}

function initializeBaseWeaponIds() {
    CONFIG.DND5E.weaponIds ['armorShit'] = 'Armor Shit';
}

function initializeConsumablesTypes() {
    CONFIG.DND5E.consumableTypes['ointment'] = 'Salbe';
    CONFIG.DND5E.consumableTypes['oil'] = 'Öl';
    CONFIG.DND5E.consumableTypes['bomb'] = 'Bombe';
}

function initializeConsumptionTypes(){
    CONFIG.DND5E.abilityConsumptionTypes['fighterEndurance'] = 'Kämpfer Ausdauer';
}

function initializeWeaponFeatureType(){
    CONFIG.DND5E.featureTypes['periklesWeapons'] = {
        label: "Perikles Waffenmerkmale",
        subtypes: {
            battleTactic: "Kampf-Taktik",
            weaponAction: "Waffenaktion",
        }
    };
}


Hooks.on('init', () => {
    initializeConsumablesTypes();
    initializeAmmunitionProperties();
    initializeWeaponFeatureType();
    initializeConsumptionTypes();
});

Hooks.on('ready', () => {
    initializeWeaponProperties();
});

Hooks.on('renderItemSheet', (app, html, data) => {

});

