// this file is generated via bin/process-docs

export const recipesData = [
    {
        "name": "Iron Plate",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Plate",
                "amount": 20
            }
        ]
    },
    {
        "name": "Iron Rod",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Rod",
                "amount": 15
            }
        ]
    },
    {
        "name": "Iron Ingot",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 30
            }
        ]
    },
    {
        "name": "Alternate: Nitro Rocket Fuel",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Fuel",
                "amount": 100000
            },
            {
                "itemName": "Nitrogen Gas",
                "amount": 75000
            },
            {
                "itemName": "Sulfur",
                "amount": 100
            },
            {
                "itemName": "Coal",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Rocket Fuel",
                "amount": 150000
            },
            {
                "itemName": "Compacted Coal",
                "amount": 25
            }
        ]
    },
    {
        "name": "Rocket Fuel",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Turbofuel",
                "amount": 60000
            },
            {
                "itemName": "Nitric Acid",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Rocket Fuel",
                "amount": 100000
            },
            {
                "itemName": "Compacted Coal",
                "amount": 10
            }
        ]
    },
    {
        "name": "Packaged Rocket Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Rocket Fuel",
                "amount": 120000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Rocket Fuel",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Rocket Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Rocket Fuel",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Rocket Fuel",
                "amount": 120000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Dark-Ion Fuel",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Packaged Rocket Fuel",
                "amount": 240
            },
            {
                "itemName": "Dark Matter Crystal",
                "amount": 80
            }
        ],
        "outputs": [
            {
                "itemName": "Ionized Fuel",
                "amount": 200000
            },
            {
                "itemName": "Compacted Coal",
                "amount": 40
            }
        ]
    },
    {
        "name": "Dark Matter Residue",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Dark Matter Residue",
                "amount": 100000
            }
        ]
    },
    {
        "name": "Excited Photonic Matter",
        "producedIn": "Converter",
        "inputs": [],
        "outputs": [
            {
                "itemName": "Excited Photonic Matter",
                "amount": 200000
            }
        ]
    },
    {
        "name": "Dark Matter Crystal",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Diamonds",
                "amount": 30
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 150000
            }
        ],
        "outputs": [
            {
                "itemName": "Dark Matter Crystal",
                "amount": 30
            }
        ]
    },
    {
        "name": "Superposition Oscillator",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "Dark Matter Crystal",
                "amount": 30
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 5
            },
            {
                "itemName": "Alclad Aluminum Sheet",
                "amount": 45
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 125000
            }
        ],
        "outputs": [
            {
                "itemName": "Superposition Oscillator",
                "amount": 5
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 125000
            }
        ]
    },
    {
        "name": "Neural-Quantum Processor",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "Time Crystal",
                "amount": 15
            },
            {
                "itemName": "Supercomputer",
                "amount": 3
            },
            {
                "itemName": "Ficsite Trigon",
                "amount": 45
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 75000
            }
        ],
        "outputs": [
            {
                "itemName": "Neural-Quantum Processor",
                "amount": 3
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 75000
            }
        ]
    },
    {
        "name": "AI Expansion Server",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "Magnetic Field Generator",
                "amount": 4
            },
            {
                "itemName": "Neural-Quantum Processor",
                "amount": 4
            },
            {
                "itemName": "Superposition Oscillator",
                "amount": 4
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 100000
            }
        ],
        "outputs": [
            {
                "itemName": "AI Expansion Server",
                "amount": 4
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 100000
            }
        ]
    },
    {
        "name": "Ionized Fuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Rocket Fuel",
                "amount": 40000
            },
            {
                "itemName": "Power Shard",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Ionized Fuel",
                "amount": 40000
            },
            {
                "itemName": "Compacted Coal",
                "amount": 5
            }
        ]
    },
    {
        "name": "Packaged Ionized Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Ionized Fuel",
                "amount": 80000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Ionized Fuel",
                "amount": 40
            }
        ]
    },
    {
        "name": "Unpackage Ionized Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Ionized Fuel",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Ionized Fuel",
                "amount": 80000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 40
            }
        ]
    },
    {
        "name": "Alternate: Turbo Diamonds",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 600
            },
            {
                "itemName": "Packaged Turbofuel",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 60
            }
        ]
    },
    {
        "name": "SAM Fluctuator",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 60
            },
            {
                "itemName": "Wire",
                "amount": 50
            },
            {
                "itemName": "Steel Pipe",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "SAM Fluctuator",
                "amount": 10
            }
        ]
    },
    {
        "name": "Ficsite Trigon",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Ficsite Ingot",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsite Trigon",
                "amount": 30
            }
        ]
    },
    {
        "name": "Ficsite Ingot (Iron)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 40
            },
            {
                "itemName": "Iron Ingot",
                "amount": 240
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsite Ingot",
                "amount": 10
            }
        ]
    },
    {
        "name": "Time Crystal",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Diamonds",
                "amount": 12
            }
        ],
        "outputs": [
            {
                "itemName": "Time Crystal",
                "amount": 6
            }
        ]
    },
    {
        "name": "Diamonds",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 600
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 30
            }
        ]
    },
    {
        "name": "Reanimated SAM",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "SAM",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 30
            }
        ]
    },
    {
        "name": "Biochemical Sculptor",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Assembly Director System",
                "amount": 0.5
            },
            {
                "itemName": "Ficsite Trigon",
                "amount": 40
            },
            {
                "itemName": "Water",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Biochemical Sculptor",
                "amount": 2
            }
        ]
    },
    {
        "name": "Ficsite Ingot (Aluminum)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 60
            },
            {
                "itemName": "Aluminum Ingot",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsite Ingot",
                "amount": 30
            }
        ]
    },
    {
        "name": "Ficsite Ingot (Caterium)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 45
            },
            {
                "itemName": "Caterium Ingot",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsite Ingot",
                "amount": 15
            }
        ]
    },
    {
        "name": "Bauxite (Caterium)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Caterium Ore",
                "amount": 150
            }
        ],
        "outputs": [
            {
                "itemName": "Bauxite",
                "amount": 120
            }
        ]
    },
    {
        "name": "Bauxite (Copper)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Copper Ore",
                "amount": 180
            }
        ],
        "outputs": [
            {
                "itemName": "Bauxite",
                "amount": 120
            }
        ]
    },
    {
        "name": "Caterium Ore (Copper)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Copper Ore",
                "amount": 150
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 120
            }
        ]
    },
    {
        "name": "Caterium Ore (Quartz)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Raw Quartz",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 120
            }
        ]
    },
    {
        "name": "Coal (Iron)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Iron Ore",
                "amount": 180
            }
        ],
        "outputs": [
            {
                "itemName": "Coal",
                "amount": 120
            }
        ]
    },
    {
        "name": "Coal (Limestone)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Limestone",
                "amount": 360
            }
        ],
        "outputs": [
            {
                "itemName": "Coal",
                "amount": 120
            }
        ]
    },
    {
        "name": "Copper Ore (Quartz)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Raw Quartz",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ore",
                "amount": 120
            }
        ]
    },
    {
        "name": "Copper Ore (Sulfur)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Sulfur",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ore",
                "amount": 120
            }
        ]
    },
    {
        "name": "Iron Ore (Limestone)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Limestone",
                "amount": 240
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ore",
                "amount": 120
            }
        ]
    },
    {
        "name": "Limestone (Sulfur)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Sulfur",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Limestone",
                "amount": 120
            }
        ]
    },
    {
        "name": "Nitrogen Gas (Bauxite)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Bauxite",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "Nitrogen Gas",
                "amount": 120000
            }
        ]
    },
    {
        "name": "Nitrogen Gas (Caterium)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Caterium Ore",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Nitrogen Gas",
                "amount": 120000
            }
        ]
    },
    {
        "name": "Raw Quartz (Bauxite)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Bauxite",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 120
            }
        ]
    },
    {
        "name": "Raw Quartz (Coal)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Coal",
                "amount": 240
            }
        ],
        "outputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 120
            }
        ]
    },
    {
        "name": "Sulfur (Coal)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Coal",
                "amount": 200
            }
        ],
        "outputs": [
            {
                "itemName": "Sulfur",
                "amount": 120
            }
        ]
    },
    {
        "name": "Sulfur (Iron)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Iron Ore",
                "amount": 300
            }
        ],
        "outputs": [
            {
                "itemName": "Sulfur",
                "amount": 120
            }
        ]
    },
    {
        "name": "Uranium Ore (Bauxite)",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Reanimated SAM",
                "amount": 10
            },
            {
                "itemName": "Bauxite",
                "amount": 480
            }
        ],
        "outputs": [
            {
                "itemName": "Uranium",
                "amount": 120
            }
        ]
    },
    {
        "name": "Turbofuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Fuel",
                "amount": 22500
            },
            {
                "itemName": "Compacted Coal",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Turbofuel",
                "amount": 18750
            }
        ]
    },
    {
        "name": "Packaged Turbofuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Turbofuel",
                "amount": 20000
            },
            {
                "itemName": "Empty Canister",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Turbofuel",
                "amount": 20
            }
        ]
    },
    {
        "name": "Unpackage Turbofuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Turbofuel",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Turbofuel",
                "amount": 20000
            },
            {
                "itemName": "Empty Canister",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Charcoal",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Wood",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Coal",
                "amount": 150
            }
        ]
    },
    {
        "name": "Alternate: Biocoal",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Biomass",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Coal",
                "amount": 45
            }
        ]
    },
    {
        "name": "Alternate: Compacted Coal",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 25
            },
            {
                "itemName": "Sulfur",
                "amount": 25
            }
        ],
        "outputs": [
            {
                "itemName": "Compacted Coal",
                "amount": 25
            }
        ]
    },
    {
        "name": "Circuit Board",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 15
            },
            {
                "itemName": "Plastic",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Circuit Board",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Fuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Fuel",
                "amount": 40000
            },
            {
                "itemName": "Polymer Resin",
                "amount": 30
            }
        ]
    },
    {
        "name": "Petroleum Coke",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 40000
            }
        ],
        "outputs": [
            {
                "itemName": "Petroleum Coke",
                "amount": 120
            }
        ]
    },
    {
        "name": "Plastic",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Plastic",
                "amount": 20
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 10000
            }
        ]
    },
    {
        "name": "Rubber",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Rubber",
                "amount": 20
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 20000
            }
        ]
    },
    {
        "name": "Residual Fuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Fuel",
                "amount": 40000
            }
        ]
    },
    {
        "name": "Residual Plastic",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Polymer Resin",
                "amount": 60
            },
            {
                "itemName": "Water",
                "amount": 20000
            }
        ],
        "outputs": [
            {
                "itemName": "Plastic",
                "amount": 20
            }
        ]
    },
    {
        "name": "Residual Rubber",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Polymer Resin",
                "amount": 40
            },
            {
                "itemName": "Water",
                "amount": 40000
            }
        ],
        "outputs": [
            {
                "itemName": "Rubber",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Pink Diamonds",
        "producedIn": "Converter",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 120
            },
            {
                "itemName": "Quartz Crystal",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 15
            }
        ]
    },
    {
        "name": "Alternate: Petroleum Diamonds",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Petroleum Coke",
                "amount": 720
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 30
            }
        ]
    },
    {
        "name": "Alternate: Oil-Based Diamonds",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 200000
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 40
            }
        ]
    },
    {
        "name": "Alternate: Cloudy Diamonds",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 240
            },
            {
                "itemName": "Limestone",
                "amount": 480
            }
        ],
        "outputs": [
            {
                "itemName": "Diamonds",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Dark Matter Trap",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Time Crystal",
                "amount": 30
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 150000
            }
        ],
        "outputs": [
            {
                "itemName": "Dark Matter Crystal",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Dark Matter Crystallization",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Dark Matter Residue",
                "amount": 200000
            }
        ],
        "outputs": [
            {
                "itemName": "Dark Matter Crystal",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Wet Concrete",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Limestone",
                "amount": 120
            },
            {
                "itemName": "Water",
                "amount": 100000
            }
        ],
        "outputs": [
            {
                "itemName": "Concrete",
                "amount": 80
            }
        ]
    },
    {
        "name": "Alternate: Turbo Heavy Fuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 37500
            },
            {
                "itemName": "Compacted Coal",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Turbofuel",
                "amount": 30000
            }
        ]
    },
    {
        "name": "Alternate: Steel Rod",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 12
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Rod",
                "amount": 48
            }
        ]
    },
    {
        "name": "Steel Beam",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Beam",
                "amount": 15
            }
        ]
    },
    {
        "name": "Steel Pipe",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 20
            }
        ]
    },
    {
        "name": "Steel Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 45
            },
            {
                "itemName": "Coal",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 45
            }
        ]
    },
    {
        "name": "Versatile Framework",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Modular Frame",
                "amount": 2.5
            },
            {
                "itemName": "Steel Beam",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Versatile Framework",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Steel Canister",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Empty Canister",
                "amount": 40
            }
        ]
    },
    {
        "name": "Empty Canister",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Plastic",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Packaged Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Fuel",
                "amount": 40000
            },
            {
                "itemName": "Empty Canister",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Fuel",
                "amount": 40
            }
        ]
    },
    {
        "name": "Liquid Biofuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Solid Biofuel",
                "amount": 90
            },
            {
                "itemName": "Water",
                "amount": 45000
            }
        ],
        "outputs": [
            {
                "itemName": "Liquid Biofuel",
                "amount": 60000
            }
        ]
    },
    {
        "name": "Packaged Liquid Biofuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Liquid Biofuel",
                "amount": 40000
            },
            {
                "itemName": "Empty Canister",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Liquid Biofuel",
                "amount": 40
            }
        ]
    },
    {
        "name": "Packaged Oil",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 30000
            },
            {
                "itemName": "Empty Canister",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Oil",
                "amount": 30
            }
        ]
    },
    {
        "name": "Packaged Heavy Oil Residue",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 30000
            },
            {
                "itemName": "Empty Canister",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Heavy Oil Residue",
                "amount": 30
            }
        ]
    },
    {
        "name": "Packaged Water",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Water",
                "amount": 60000
            },
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Water",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Liquid Biofuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Liquid Biofuel",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Liquid Biofuel",
                "amount": 60000
            },
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Fuel",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Fuel",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Fuel",
                "amount": 60000
            },
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Oil",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Oil",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Crude Oil",
                "amount": 60000
            },
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Heavy Oil Residue",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Heavy Oil Residue",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 20000
            },
            {
                "itemName": "Empty Canister",
                "amount": 20
            }
        ]
    },
    {
        "name": "Unpackage Water",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Water",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Water",
                "amount": 120000
            },
            {
                "itemName": "Empty Canister",
                "amount": 120
            }
        ]
    },
    {
        "name": "Alternate: Steamed Copper Sheet",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 22.5
            },
            {
                "itemName": "Water",
                "amount": 22500
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 22.5
            }
        ]
    },
    {
        "name": "Alternate: Rubber Concrete",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Limestone",
                "amount": 100
            },
            {
                "itemName": "Rubber",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Concrete",
                "amount": 90
            }
        ]
    },
    {
        "name": "Alternate: Recycled Rubber",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Plastic",
                "amount": 30
            },
            {
                "itemName": "Fuel",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Rubber",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Pure Quartz Crystal",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 67.5
            },
            {
                "itemName": "Water",
                "amount": 37500
            }
        ],
        "outputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 52.5
            }
        ]
    },
    {
        "name": "Quartz Crystal",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 22.5
            }
        ]
    },
    {
        "name": "Alternate: Pure Iron Ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 35
            },
            {
                "itemName": "Water",
                "amount": 20000
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 65
            }
        ]
    },
    {
        "name": "Alternate: Pure Copper Ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Copper Ore",
                "amount": 15
            },
            {
                "itemName": "Water",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 37.5
            }
        ]
    },
    {
        "name": "Alternate: Pure Caterium Ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 24
            },
            {
                "itemName": "Water",
                "amount": 24000
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 12
            }
        ]
    },
    {
        "name": "Alternate: Pure Aluminum Ingot",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "Aluminum Scrap",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 30
            }
        ]
    },
    {
        "name": "Aluminum Casing",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 90
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Casing",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alclad Aluminum Sheet",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 30
            },
            {
                "itemName": "Copper Ingot",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Alclad Aluminum Sheet",
                "amount": 30
            }
        ]
    },
    {
        "name": "Alumina Solution",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Bauxite",
                "amount": 120
            },
            {
                "itemName": "Water",
                "amount": 180000
            }
        ],
        "outputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 120000
            },
            {
                "itemName": "Silica",
                "amount": 50
            }
        ]
    },
    {
        "name": "Aluminum Scrap",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 240000
            },
            {
                "itemName": "Coal",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Scrap",
                "amount": 360
            },
            {
                "itemName": "Water",
                "amount": 120000
            }
        ]
    },
    {
        "name": "Packaged Alumina Solution",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 120000
            },
            {
                "itemName": "Empty Canister",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Alumina Solution",
                "amount": 120
            }
        ]
    },
    {
        "name": "Aluminum Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Aluminum Scrap",
                "amount": 90
            },
            {
                "itemName": "Silica",
                "amount": 75
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 60
            }
        ]
    },
    {
        "name": "Silica",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 22.5
            }
        ],
        "outputs": [
            {
                "itemName": "Silica",
                "amount": 37.5
            }
        ]
    },
    {
        "name": "Crystal Oscillator",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 18
            },
            {
                "itemName": "Cable",
                "amount": 14
            },
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Crystal Oscillator",
                "amount": 1
            }
        ]
    },
    {
        "name": "Unpackage Alumina Solution",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Alumina Solution",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 120000
            },
            {
                "itemName": "Empty Canister",
                "amount": 120
            }
        ]
    },
    {
        "name": "Alternate: Polymer Resin",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Polymer Resin",
                "amount": 130
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 20000
            }
        ]
    },
    {
        "name": "Alternate: Plastic Smart Plating",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 2.5
            },
            {
                "itemName": "Rotor",
                "amount": 2.5
            },
            {
                "itemName": "Plastic",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Smart Plating",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Automated Speed Wiring",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Stator",
                "amount": 3.75
            },
            {
                "itemName": "Wire",
                "amount": 75
            },
            {
                "itemName": "High-Speed Connector",
                "amount": 1.88
            }
        ],
        "outputs": [
            {
                "itemName": "Automated Wiring",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Encased Industrial Beam",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Beam",
                "amount": 18
            },
            {
                "itemName": "Concrete",
                "amount": 36
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Industrial Beam",
                "amount": 6
            }
        ]
    },
    {
        "name": "Motor",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Rotor",
                "amount": 10
            },
            {
                "itemName": "Stator",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Motor",
                "amount": 5
            }
        ]
    },
    {
        "name": "Stator",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 15
            },
            {
                "itemName": "Wire",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Stator",
                "amount": 5
            }
        ]
    },
    {
        "name": "Automated Wiring",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Stator",
                "amount": 2.5
            },
            {
                "itemName": "Cable",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Automated Wiring",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "AI Limiter",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 25
            },
            {
                "itemName": "Quickwire",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "AI Limiter",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Heavy Oil Residue",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Crude Oil",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 40000
            },
            {
                "itemName": "Polymer Resin",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Heavy Flexible Frame",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Modular Frame",
                "amount": 18.75
            },
            {
                "itemName": "Encased Industrial Beam",
                "amount": 11.25
            },
            {
                "itemName": "Rubber",
                "amount": 75
            },
            {
                "itemName": "Screw",
                "amount": 390
            }
        ],
        "outputs": [
            {
                "itemName": "Heavy Modular Frame",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Computer",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Circuit Board",
                "amount": 10
            },
            {
                "itemName": "Cable",
                "amount": 20
            },
            {
                "itemName": "Plastic",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Computer",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "Heavy Modular Frame",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Modular Frame",
                "amount": 10
            },
            {
                "itemName": "Steel Pipe",
                "amount": 40
            },
            {
                "itemName": "Encased Industrial Beam",
                "amount": 10
            },
            {
                "itemName": "Screw",
                "amount": 240
            }
        ],
        "outputs": [
            {
                "itemName": "Heavy Modular Frame",
                "amount": 2
            }
        ]
    },
    {
        "name": "Modular Engine",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Motor",
                "amount": 2
            },
            {
                "itemName": "Rubber",
                "amount": 15
            },
            {
                "itemName": "Smart Plating",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Modular Engine",
                "amount": 1
            }
        ]
    },
    {
        "name": "Adaptive Control Unit",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Automated Wiring",
                "amount": 5
            },
            {
                "itemName": "Circuit Board",
                "amount": 5
            },
            {
                "itemName": "Heavy Modular Frame",
                "amount": 1
            },
            {
                "itemName": "Computer",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Adaptive Control Unit",
                "amount": 1
            }
        ]
    },
    {
        "name": "Alternate: Fused Wire",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 12
            },
            {
                "itemName": "Caterium Ingot",
                "amount": 3
            }
        ],
        "outputs": [
            {
                "itemName": "Wire",
                "amount": 90
            }
        ]
    },
    {
        "name": "Alternate: Flexible Framework",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Modular Frame",
                "amount": 3.75
            },
            {
                "itemName": "Steel Beam",
                "amount": 22.5
            },
            {
                "itemName": "Rubber",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Versatile Framework",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Alternate: Electrode Circuit Board",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Rubber",
                "amount": 20
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Circuit Board",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Electrode Aluminum Scrap",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 180000
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Scrap",
                "amount": 300
            },
            {
                "itemName": "Water",
                "amount": 105000
            }
        ]
    },
    {
        "name": "Alternate: Diluted Packaged Fuel",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 30000
            },
            {
                "itemName": "Packaged Water",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Fuel",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Copper Rotor",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 22.5
            },
            {
                "itemName": "Screw",
                "amount": 195
            }
        ],
        "outputs": [
            {
                "itemName": "Rotor",
                "amount": 11.25
            }
        ]
    },
    {
        "name": "Modular Frame",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 3
            },
            {
                "itemName": "Iron Rod",
                "amount": 12
            }
        ],
        "outputs": [
            {
                "itemName": "Modular Frame",
                "amount": 2
            }
        ]
    },
    {
        "name": "Rotor",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Rod",
                "amount": 20
            },
            {
                "itemName": "Screw",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "Rotor",
                "amount": 4
            }
        ]
    },
    {
        "name": "Copper Sheet",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 10
            }
        ]
    },
    {
        "name": "Smart Plating",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 2
            },
            {
                "itemName": "Rotor",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Smart Plating",
                "amount": 2
            }
        ]
    },
    {
        "name": "Alternate: Copper Alloy Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Copper Ore",
                "amount": 50
            },
            {
                "itemName": "Iron Ore",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 100
            }
        ]
    },
    {
        "name": "Alternate: Coke Steel Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 75
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 75
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 100
            }
        ]
    },
    {
        "name": "Alternate: Coated Iron Plate",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 37.5
            },
            {
                "itemName": "Plastic",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Plate",
                "amount": 75
            }
        ]
    },
    {
        "name": "Alternate: Coated Iron Canister",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Plate",
                "amount": 30
            },
            {
                "itemName": "Copper Sheet",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Coated Cable",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Wire",
                "amount": 37.5
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 15000
            }
        ],
        "outputs": [
            {
                "itemName": "Cable",
                "amount": 67.5
            }
        ]
    },
    {
        "name": "Alternate: Bolted Frame",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 7.5
            },
            {
                "itemName": "Screw",
                "amount": 140
            }
        ],
        "outputs": [
            {
                "itemName": "Modular Frame",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Adhered Iron Plate",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Plate",
                "amount": 11.25
            },
            {
                "itemName": "Rubber",
                "amount": 3.75
            }
        ],
        "outputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Alternate: Turbo Pressure Motor",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Motor",
                "amount": 7.5
            },
            {
                "itemName": "Pressure Conversion Cube",
                "amount": 1.88
            },
            {
                "itemName": "Packaged Nitrogen Gas",
                "amount": 45
            },
            {
                "itemName": "Stator",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Turbo Motor",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Encased Plutonium Cell",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Plutonium Pellet",
                "amount": 10
            },
            {
                "itemName": "Concrete",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Plutonium Cell",
                "amount": 5
            }
        ]
    },
    {
        "name": "Pressure Conversion Cube",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Fused Modular Frame",
                "amount": 1
            },
            {
                "itemName": "Radio Control Unit",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Pressure Conversion Cube",
                "amount": 1
            }
        ]
    },
    {
        "name": "Nitric Acid",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Nitrogen Gas",
                "amount": 120000
            },
            {
                "itemName": "Water",
                "amount": 30000
            },
            {
                "itemName": "Iron Plate",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Nitric Acid",
                "amount": 30000
            }
        ]
    },
    {
        "name": "Non-Fissile Uranium",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Uranium Waste",
                "amount": 37.5
            },
            {
                "itemName": "Silica",
                "amount": 25
            },
            {
                "itemName": "Nitric Acid",
                "amount": 15000
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 15000
            }
        ],
        "outputs": [
            {
                "itemName": "Non-Fissile Uranium",
                "amount": 50
            },
            {
                "itemName": "Water",
                "amount": 15000
            }
        ]
    },
    {
        "name": "Copper Powder",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 300
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Powder",
                "amount": 50
            }
        ]
    },
    {
        "name": "Plutonium Pellet",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Non-Fissile Uranium",
                "amount": 100
            },
            {
                "itemName": "Uranium Waste",
                "amount": 25
            }
        ],
        "outputs": [
            {
                "itemName": "Plutonium Pellet",
                "amount": 30
            }
        ]
    },
    {
        "name": "Plutonium Fuel Rod",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Encased Plutonium Cell",
                "amount": 7.5
            },
            {
                "itemName": "Steel Beam",
                "amount": 4.5
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 1.5
            },
            {
                "itemName": "Heat Sink",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Plutonium Fuel Rod",
                "amount": 0.25
            }
        ]
    },
    {
        "name": "Packaged Nitric Acid",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Nitric Acid",
                "amount": 30000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Nitric Acid",
                "amount": 30
            }
        ]
    },
    {
        "name": "Nuclear Pasta",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Copper Powder",
                "amount": 100
            },
            {
                "itemName": "Pressure Conversion Cube",
                "amount": 0.5
            }
        ],
        "outputs": [
            {
                "itemName": "Nuclear Pasta",
                "amount": 0.5
            }
        ]
    },
    {
        "name": "Unpackage Nitric Acid",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Nitric Acid",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Nitric Acid",
                "amount": 20000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alternate: Turbo Blend Fuel",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Fuel",
                "amount": 15000
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 30000
            },
            {
                "itemName": "Sulfur",
                "amount": 22.5
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 22.5
            }
        ],
        "outputs": [
            {
                "itemName": "Turbofuel",
                "amount": 45000
            }
        ]
    },
    {
        "name": "Encased Uranium Cell",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Uranium",
                "amount": 50
            },
            {
                "itemName": "Concrete",
                "amount": 15
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 40000
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Uranium Cell",
                "amount": 25
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 10000
            }
        ]
    },
    {
        "name": "Cooling System",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Heat Sink",
                "amount": 12
            },
            {
                "itemName": "Rubber",
                "amount": 12
            },
            {
                "itemName": "Water",
                "amount": 30000
            },
            {
                "itemName": "Nitrogen Gas",
                "amount": 150000
            }
        ],
        "outputs": [
            {
                "itemName": "Cooling System",
                "amount": 6
            }
        ]
    },
    {
        "name": "Battery",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Sulfuric Acid",
                "amount": 50000
            },
            {
                "itemName": "Alumina Solution",
                "amount": 40000
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Battery",
                "amount": 20
            },
            {
                "itemName": "Water",
                "amount": 30000
            }
        ]
    },
    {
        "name": "Supercomputer",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Computer",
                "amount": 7.5
            },
            {
                "itemName": "AI Limiter",
                "amount": 3.75
            },
            {
                "itemName": "High-Speed Connector",
                "amount": 5.63
            },
            {
                "itemName": "Plastic",
                "amount": 52.5
            }
        ],
        "outputs": [
            {
                "itemName": "Supercomputer",
                "amount": 1.88
            }
        ]
    },
    {
        "name": "Radio Control Unit",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Aluminum Casing",
                "amount": 40
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 1.25
            },
            {
                "itemName": "Computer",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Radio Control Unit",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "Sulfuric Acid",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Sulfur",
                "amount": 50
            },
            {
                "itemName": "Water",
                "amount": 50000
            }
        ],
        "outputs": [
            {
                "itemName": "Sulfuric Acid",
                "amount": 50000
            }
        ]
    },
    {
        "name": "Packaged Sulfuric Acid",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Sulfuric Acid",
                "amount": 40000
            },
            {
                "itemName": "Empty Canister",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Sulfuric Acid",
                "amount": 40
            }
        ]
    },
    {
        "name": "Assembly Director System",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Adaptive Control Unit",
                "amount": 1.5
            },
            {
                "itemName": "Supercomputer",
                "amount": 0.75
            }
        ],
        "outputs": [
            {
                "itemName": "Assembly Director System",
                "amount": 0.75
            }
        ]
    },
    {
        "name": "High-Speed Connector",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Quickwire",
                "amount": 210
            },
            {
                "itemName": "Cable",
                "amount": 37.5
            },
            {
                "itemName": "Circuit Board",
                "amount": 3.75
            }
        ],
        "outputs": [
            {
                "itemName": "High-Speed Connector",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Unpackage Sulfuric Acid",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Sulfuric Acid",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Sulfuric Acid",
                "amount": 60000
            },
            {
                "itemName": "Empty Canister",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Super-State Computer",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Computer",
                "amount": 7.2
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 2.4
            },
            {
                "itemName": "Battery",
                "amount": 24
            },
            {
                "itemName": "Wire",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Supercomputer",
                "amount": 2.4
            }
        ]
    },
    {
        "name": "Electromagnetic Control Rod",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Stator",
                "amount": 6
            },
            {
                "itemName": "AI Limiter",
                "amount": 4
            }
        ],
        "outputs": [
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 4
            }
        ]
    },
    {
        "name": "Uranium Fuel Rod",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Encased Uranium Cell",
                "amount": 20
            },
            {
                "itemName": "Encased Industrial Beam",
                "amount": 1.2
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Uranium Fuel Rod",
                "amount": 0.4
            }
        ]
    },
    {
        "name": "Magnetic Field Generator",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Versatile Framework",
                "amount": 2.5
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 1
            }
        ],
        "outputs": [
            {
                "itemName": "Magnetic Field Generator",
                "amount": 1
            }
        ]
    },
    {
        "name": "Alternate: Sloppy Alumina",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Bauxite",
                "amount": 200
            },
            {
                "itemName": "Water",
                "amount": 200000
            }
        ],
        "outputs": [
            {
                "itemName": "Alumina Solution",
                "amount": 240000
            }
        ]
    },
    {
        "name": "Alternate: Radio Control System",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Crystal Oscillator",
                "amount": 1.5
            },
            {
                "itemName": "Circuit Board",
                "amount": 15
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 90
            },
            {
                "itemName": "Rubber",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Radio Control Unit",
                "amount": 4.5
            }
        ]
    },
    {
        "name": "Alternate: Plutonium Fuel Unit",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Encased Plutonium Cell",
                "amount": 10
            },
            {
                "itemName": "Pressure Conversion Cube",
                "amount": 0.5
            }
        ],
        "outputs": [
            {
                "itemName": "Plutonium Fuel Rod",
                "amount": 0.5
            }
        ]
    },
    {
        "name": "Alternate: OC Supercomputer",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Radio Control Unit",
                "amount": 6
            },
            {
                "itemName": "Cooling System",
                "amount": 6
            }
        ],
        "outputs": [
            {
                "itemName": "Supercomputer",
                "amount": 3
            }
        ]
    },
    {
        "name": "Heat Sink",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Alclad Aluminum Sheet",
                "amount": 37.5
            },
            {
                "itemName": "Copper Sheet",
                "amount": 22.5
            }
        ],
        "outputs": [
            {
                "itemName": "Heat Sink",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Fused Modular Frame",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Heavy Modular Frame",
                "amount": 1.5
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 75
            },
            {
                "itemName": "Nitrogen Gas",
                "amount": 37500
            }
        ],
        "outputs": [
            {
                "itemName": "Fused Modular Frame",
                "amount": 1.5
            }
        ]
    },
    {
        "name": "Empty Fluid Tank",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Empty Fluid Tank",
                "amount": 60
            }
        ]
    },
    {
        "name": "Packaged Nitrogen Gas",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Nitrogen Gas",
                "amount": 240000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Packaged Nitrogen Gas",
                "amount": 60
            }
        ]
    },
    {
        "name": "Unpackage Nitrogen Gas",
        "producedIn": "Packager",
        "inputs": [
            {
                "itemName": "Packaged Nitrogen Gas",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Nitrogen Gas",
                "amount": 240000
            },
            {
                "itemName": "Empty Fluid Tank",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Instant Scrap",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Bauxite",
                "amount": 150
            },
            {
                "itemName": "Coal",
                "amount": 100
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 50000
            },
            {
                "itemName": "Water",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Scrap",
                "amount": 300
            },
            {
                "itemName": "Water",
                "amount": 50000
            }
        ]
    },
    {
        "name": "Alternate: Instant Plutonium Cell",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Non-Fissile Uranium",
                "amount": 75
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Plutonium Cell",
                "amount": 10
            }
        ]
    },
    {
        "name": "Alternate: Heat-Fused Frame",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Heavy Modular Frame",
                "amount": 3
            },
            {
                "itemName": "Aluminum Ingot",
                "amount": 150
            },
            {
                "itemName": "Nitric Acid",
                "amount": 24000
            },
            {
                "itemName": "Fuel",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Fused Modular Frame",
                "amount": 3
            }
        ]
    },
    {
        "name": "Alternate: Fertile Uranium",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Uranium",
                "amount": 25
            },
            {
                "itemName": "Uranium Waste",
                "amount": 25
            },
            {
                "itemName": "Nitric Acid",
                "amount": 15000
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 25000
            }
        ],
        "outputs": [
            {
                "itemName": "Non-Fissile Uranium",
                "amount": 100
            },
            {
                "itemName": "Water",
                "amount": 40000
            }
        ]
    },
    {
        "name": "Alternate: Electric Motor",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 3.75
            },
            {
                "itemName": "Rotor",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Motor",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Alternate: Diluted Fuel",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Heavy Oil Residue",
                "amount": 50000
            },
            {
                "itemName": "Water",
                "amount": 100000
            }
        ],
        "outputs": [
            {
                "itemName": "Fuel",
                "amount": 100000
            }
        ]
    },
    {
        "name": "Alternate: Cooling Device",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Heat Sink",
                "amount": 10
            },
            {
                "itemName": "Motor",
                "amount": 2.5
            },
            {
                "itemName": "Nitrogen Gas",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Cooling System",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Classic Battery",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Sulfur",
                "amount": 45
            },
            {
                "itemName": "Alclad Aluminum Sheet",
                "amount": 52.5
            },
            {
                "itemName": "Plastic",
                "amount": 60
            },
            {
                "itemName": "Wire",
                "amount": 90
            }
        ],
        "outputs": [
            {
                "itemName": "Battery",
                "amount": 30
            }
        ]
    },
    {
        "name": "Alternate: Automated Miner",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 4
            },
            {
                "itemName": "Iron Plate",
                "amount": 4
            }
        ],
        "outputs": [
            {
                "itemName": "Portable Miner",
                "amount": 1
            }
        ]
    },
    {
        "name": "Alternate: Alclad Casing",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 150
            },
            {
                "itemName": "Copper Ingot",
                "amount": 75
            }
        ],
        "outputs": [
            {
                "itemName": "Aluminum Casing",
                "amount": 112.5
            }
        ]
    },
    {
        "name": "Alternate: Molded Steel Pipe",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 50
            },
            {
                "itemName": "Concrete",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 50
            }
        ]
    },
    {
        "name": "Alternate: Iron Pipe",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 100
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 25
            }
        ]
    },
    {
        "name": "Alternate: Steel Cast Plate",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 15
            },
            {
                "itemName": "Steel Ingot",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Plate",
                "amount": 45
            }
        ]
    },
    {
        "name": "Alternate: Molded Beam",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 120
            },
            {
                "itemName": "Concrete",
                "amount": 80
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Beam",
                "amount": 45
            }
        ]
    },
    {
        "name": "Alternate: Aluminum Beam",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 22.5
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Beam",
                "amount": 22.5
            }
        ]
    },
    {
        "name": "Alternate: Aluminum Rod",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Aluminum Ingot",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Rod",
                "amount": 52.5
            }
        ]
    },
    {
        "name": "Alternate: Plastic AI Limiter",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Quickwire",
                "amount": 120
            },
            {
                "itemName": "Plastic",
                "amount": 28
            }
        ],
        "outputs": [
            {
                "itemName": "AI Limiter",
                "amount": 8
            }
        ]
    },
    {
        "name": "Alternate: Distilled Silica",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Dissolved Silica",
                "amount": 120000
            },
            {
                "itemName": "Limestone",
                "amount": 50
            },
            {
                "itemName": "Water",
                "amount": 100000
            }
        ],
        "outputs": [
            {
                "itemName": "Silica",
                "amount": 270
            },
            {
                "itemName": "Water",
                "amount": 80000
            }
        ]
    },
    {
        "name": "Alternate: Quartz Purification",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 120
            },
            {
                "itemName": "Nitric Acid",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 75
            },
            {
                "itemName": "Dissolved Silica",
                "amount": 60000
            }
        ]
    },
    {
        "name": "Alternate: Fused Quartz Crystal",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 75
            },
            {
                "itemName": "Coal",
                "amount": 36
            }
        ],
        "outputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 54
            }
        ]
    },
    {
        "name": "Alternate: Leached Iron ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 50
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 100
            }
        ]
    },
    {
        "name": "Alternate: Basic Iron Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 25
            },
            {
                "itemName": "Limestone",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 50
            }
        ]
    },
    {
        "name": "Alternate: Tempered Copper Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Copper Ore",
                "amount": 25
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Leached Copper Ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Copper Ore",
                "amount": 45
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 25000
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 110
            }
        ]
    },
    {
        "name": "Alternate: Tempered Caterium Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 45
            },
            {
                "itemName": "Petroleum Coke",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 22.5
            }
        ]
    },
    {
        "name": "Alternate: Leached Caterium Ingot",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 54
            },
            {
                "itemName": "Sulfuric Acid",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 36
            }
        ]
    },
    {
        "name": "Alternate: Caterium Wire",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Wire",
                "amount": 120
            }
        ]
    },
    {
        "name": "Alternate: Iron Wire",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 12.5
            }
        ],
        "outputs": [
            {
                "itemName": "Wire",
                "amount": 22.5
            }
        ]
    },
    {
        "name": "Alternate: Infused Uranium Cell",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Uranium",
                "amount": 25
            },
            {
                "itemName": "Silica",
                "amount": 15
            },
            {
                "itemName": "Sulfur",
                "amount": 25
            },
            {
                "itemName": "Quickwire",
                "amount": 75
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Uranium Cell",
                "amount": 20
            }
        ]
    },
    {
        "name": "Caterium Ingot",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "Caterium Ore",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 15
            }
        ]
    },
    {
        "name": "Alternate: Turbo Electric Motor",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Motor",
                "amount": 6.56
            },
            {
                "itemName": "Radio Control Unit",
                "amount": 8.44
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 4.69
            },
            {
                "itemName": "Rotor",
                "amount": 6.56
            }
        ],
        "outputs": [
            {
                "itemName": "Turbo Motor",
                "amount": 2.81
            }
        ]
    },
    {
        "name": "Turbo Motor",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Cooling System",
                "amount": 7.5
            },
            {
                "itemName": "Radio Control Unit",
                "amount": 3.75
            },
            {
                "itemName": "Motor",
                "amount": 7.5
            },
            {
                "itemName": "Rubber",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Turbo Motor",
                "amount": 1.88
            }
        ]
    },
    {
        "name": "Thermal Propulsion Rocket",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Modular Engine",
                "amount": 2.5
            },
            {
                "itemName": "Turbo Motor",
                "amount": 1
            },
            {
                "itemName": "Cooling System",
                "amount": 3
            },
            {
                "itemName": "Fused Modular Frame",
                "amount": 1
            }
        ],
        "outputs": [
            {
                "itemName": "Thermal Propulsion Rocket",
                "amount": 1
            }
        ]
    },
    {
        "name": "Alternate: Quickwire Stator",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 16
            },
            {
                "itemName": "Quickwire",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Stator",
                "amount": 8
            }
        ]
    },
    {
        "name": "Alternate: Cheap Silica",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Raw Quartz",
                "amount": 22.5
            },
            {
                "itemName": "Limestone",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Silica",
                "amount": 52.5
            }
        ]
    },
    {
        "name": "Alternate: Steel Screw",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Steel Beam",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Screw",
                "amount": 260
            }
        ]
    },
    {
        "name": "Alternate: Cast Screw",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 12.5
            }
        ],
        "outputs": [
            {
                "itemName": "Screw",
                "amount": 50
            }
        ]
    },
    {
        "name": "Alternate: Steel Rotor",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 10
            },
            {
                "itemName": "Wire",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Rotor",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Encased Industrial Pipe",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Steel Pipe",
                "amount": 24
            },
            {
                "itemName": "Concrete",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Encased Industrial Beam",
                "amount": 4
            }
        ]
    },
    {
        "name": "Alternate: Stitched Iron Plate",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Plate",
                "amount": 18.75
            },
            {
                "itemName": "Wire",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 5.63
            }
        ]
    },
    {
        "name": "Alternate: Bolted Iron Plate",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Plate",
                "amount": 90
            },
            {
                "itemName": "Screw",
                "amount": 250
            }
        ],
        "outputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 15
            }
        ]
    },
    {
        "name": "Alternate: Radio Connection Unit",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Heat Sink",
                "amount": 15
            },
            {
                "itemName": "High-Speed Connector",
                "amount": 7.5
            },
            {
                "itemName": "Quartz Crystal",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Radio Control Unit",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Alternate: Fused Quickwire",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 7.5
            },
            {
                "itemName": "Copper Ingot",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Quickwire",
                "amount": 90
            }
        ]
    },
    {
        "name": "Alternate: Recycled Plastic",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Rubber",
                "amount": 30
            },
            {
                "itemName": "Fuel",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Plastic",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Uranium Fuel Unit",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Encased Uranium Cell",
                "amount": 20
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 2
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 0.6
            },
            {
                "itemName": "Rotor",
                "amount": 2
            }
        ],
        "outputs": [
            {
                "itemName": "Uranium Fuel Rod",
                "amount": 0.6
            }
        ]
    },
    {
        "name": "Alternate: Rigor Motor",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Rotor",
                "amount": 3.75
            },
            {
                "itemName": "Stator",
                "amount": 3.75
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 1.25
            }
        ],
        "outputs": [
            {
                "itemName": "Motor",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Alternate: Steeled Frame",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 2
            },
            {
                "itemName": "Steel Pipe",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Modular Frame",
                "amount": 3
            }
        ]
    },
    {
        "name": "Alternate: Compacted Steel Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 5
            },
            {
                "itemName": "Compacted Coal",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 10
            }
        ]
    },
    {
        "name": "Alternate: Solid Steel Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 40
            },
            {
                "itemName": "Coal",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Steel Ingot",
                "amount": 60
            }
        ]
    },
    {
        "name": "Alternate: Iron Alloy Ingot",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Iron Ore",
                "amount": 40
            },
            {
                "itemName": "Copper Ore",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Ingot",
                "amount": 75
            }
        ]
    },
    {
        "name": "Alternate: Silicon High-Speed Connector",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Quickwire",
                "amount": 90
            },
            {
                "itemName": "Silica",
                "amount": 37.5
            },
            {
                "itemName": "Circuit Board",
                "amount": 3
            }
        ],
        "outputs": [
            {
                "itemName": "High-Speed Connector",
                "amount": 3
            }
        ]
    },
    {
        "name": "Alternate: Heavy Encased Frame",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Modular Frame",
                "amount": 7.5
            },
            {
                "itemName": "Encased Industrial Beam",
                "amount": 9.38
            },
            {
                "itemName": "Steel Pipe",
                "amount": 33.75
            },
            {
                "itemName": "Concrete",
                "amount": 20.63
            }
        ],
        "outputs": [
            {
                "itemName": "Heavy Modular Frame",
                "amount": 2.81
            }
        ]
    },
    {
        "name": "Alternate: Heat Exchanger",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Aluminum Casing",
                "amount": 30
            },
            {
                "itemName": "Rubber",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Heat Sink",
                "amount": 10
            }
        ]
    },
    {
        "name": "Alternate: Fine Black Powder",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Sulfur",
                "amount": 7.5
            },
            {
                "itemName": "Compacted Coal",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Black Powder",
                "amount": 45
            }
        ]
    },
    {
        "name": "Alternate: Electromagnetic Connection Rod",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Stator",
                "amount": 8
            },
            {
                "itemName": "High-Speed Connector",
                "amount": 4
            }
        ],
        "outputs": [
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 8
            }
        ]
    },
    {
        "name": "Alternate: Insulated Crystal Oscillator",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Quartz Crystal",
                "amount": 18.75
            },
            {
                "itemName": "Rubber",
                "amount": 13.13
            },
            {
                "itemName": "AI Limiter",
                "amount": 1.88
            }
        ],
        "outputs": [
            {
                "itemName": "Crystal Oscillator",
                "amount": 1.88
            }
        ]
    },
    {
        "name": "Alternate: Fine Concrete",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Silica",
                "amount": 15
            },
            {
                "itemName": "Limestone",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Concrete",
                "amount": 50
            }
        ]
    },
    {
        "name": "Alternate: Crystal Computer",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Circuit Board",
                "amount": 5
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 1.67
            }
        ],
        "outputs": [
            {
                "itemName": "Computer",
                "amount": 3.33
            }
        ]
    },
    {
        "name": "Alternate: Caterium Computer",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Circuit Board",
                "amount": 15
            },
            {
                "itemName": "Quickwire",
                "amount": 52.5
            },
            {
                "itemName": "Rubber",
                "amount": 22.5
            }
        ],
        "outputs": [
            {
                "itemName": "Computer",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Alternate: Caterium Circuit Board",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Plastic",
                "amount": 12.5
            },
            {
                "itemName": "Quickwire",
                "amount": 37.5
            }
        ],
        "outputs": [
            {
                "itemName": "Circuit Board",
                "amount": 8.75
            }
        ]
    },
    {
        "name": "Alternate: Silicon Circuit Board",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 27.5
            },
            {
                "itemName": "Silica",
                "amount": 27.5
            }
        ],
        "outputs": [
            {
                "itemName": "Circuit Board",
                "amount": 12.5
            }
        ]
    },
    {
        "name": "Alternate: Quickwire Cable",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Quickwire",
                "amount": 7.5
            },
            {
                "itemName": "Rubber",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Cable",
                "amount": 27.5
            }
        ]
    },
    {
        "name": "Alternate: Insulated Cable",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Wire",
                "amount": 45
            },
            {
                "itemName": "Rubber",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Cable",
                "amount": 100
            }
        ]
    },
    {
        "name": "Ficsonium",
        "producedIn": "Particle Accelerator",
        "inputs": [
            {
                "itemName": "Plutonium Waste",
                "amount": 10
            },
            {
                "itemName": "Singularity Cell",
                "amount": 10
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 200000
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsonium",
                "amount": 10
            }
        ]
    },
    {
        "name": "Ficsonium Fuel Rod",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "Ficsonium",
                "amount": 5
            },
            {
                "itemName": "Electromagnetic Control Rod",
                "amount": 5
            },
            {
                "itemName": "Ficsite Trigon",
                "amount": 100
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 50000
            }
        ],
        "outputs": [
            {
                "itemName": "Ficsonium Fuel Rod",
                "amount": 2.5
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 50000
            }
        ]
    },
    {
        "name": "Singularity Cell",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Nuclear Pasta",
                "amount": 1
            },
            {
                "itemName": "Dark Matter Crystal",
                "amount": 20
            },
            {
                "itemName": "Iron Plate",
                "amount": 100
            },
            {
                "itemName": "Concrete",
                "amount": 200
            }
        ],
        "outputs": [
            {
                "itemName": "Singularity Cell",
                "amount": 10
            }
        ]
    },
    {
        "name": "Ballistic Warp Drive",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Thermal Propulsion Rocket",
                "amount": 1
            },
            {
                "itemName": "Singularity Cell",
                "amount": 5
            },
            {
                "itemName": "Superposition Oscillator",
                "amount": 2
            },
            {
                "itemName": "Dark Matter Crystal",
                "amount": 40
            }
        ],
        "outputs": [
            {
                "itemName": "Ballistic Warp Drive",
                "amount": 1
            }
        ]
    },
    {
        "name": "Iodine-Infused Filter",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Gas Filter",
                "amount": 3.75
            },
            {
                "itemName": "Quickwire",
                "amount": 30
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 3.75
            }
        ],
        "outputs": [
            {
                "itemName": "Iodine-Infused Filter",
                "amount": 3.75
            }
        ]
    },
    {
        "name": "Quickwire",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Caterium Ingot",
                "amount": 12
            }
        ],
        "outputs": [
            {
                "itemName": "Quickwire",
                "amount": 60
            }
        ]
    },
    {
        "name": "Solid Biofuel",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Biomass",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Solid Biofuel",
                "amount": 60
            }
        ]
    },
    {
        "name": "Hog Protein",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Hog Remains",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Alien Protein",
                "amount": 20
            }
        ]
    },
    {
        "name": "Spitter Protein",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Spitter Remains",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Alien Protein",
                "amount": 20
            }
        ]
    },
    {
        "name": "Biomass (Mycelia)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Mycelia",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Biomass",
                "amount": 150
            }
        ]
    },
    {
        "name": "Power Shard (1)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Blue Power Slug",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Power Shard",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Black Powder",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Coal",
                "amount": 15
            },
            {
                "itemName": "Sulfur",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Black Powder",
                "amount": 30
            }
        ]
    },
    {
        "name": "Alien Power Matrix",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "SAM Fluctuator",
                "amount": 12.5
            },
            {
                "itemName": "Power Shard",
                "amount": 7.5
            },
            {
                "itemName": "Superposition Oscillator",
                "amount": 7.5
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Alien Power Matrix",
                "amount": 2.5
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 60000
            }
        ]
    },
    {
        "name": "Stinger Protein",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Stinger Remains",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Alien Protein",
                "amount": 20
            }
        ]
    },
    {
        "name": "Hatcher Protein",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Hatcher Remains",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Alien Protein",
                "amount": 20
            }
        ]
    },
    {
        "name": "Alien DNA Capsule",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Alien Protein",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Alien DNA Capsule",
                "amount": 10
            }
        ]
    },
    {
        "name": "Biomass (Alien Protein)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Alien Protein",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Biomass",
                "amount": 1500
            }
        ]
    },
    {
        "name": "Iron Rebar",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Rod",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Iron Rebar",
                "amount": 15
            }
        ]
    },
    {
        "name": "Homing Rifle Ammo",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Rifle Ammo",
                "amount": 50
            },
            {
                "itemName": "High-Speed Connector",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Homing Rifle Ammo",
                "amount": 25
            }
        ]
    },
    {
        "name": "Stun Rebar",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Rebar",
                "amount": 10
            },
            {
                "itemName": "Quickwire",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Stun Rebar",
                "amount": 10
            }
        ]
    },
    {
        "name": "Gas Filter",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Fabric",
                "amount": 15
            },
            {
                "itemName": "Coal",
                "amount": 30
            },
            {
                "itemName": "Iron Plate",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Gas Filter",
                "amount": 7.5
            }
        ]
    },
    {
        "name": "Gas Nobelisk",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Nobelisk",
                "amount": 5
            },
            {
                "itemName": "Biomass",
                "amount": 50
            }
        ],
        "outputs": [
            {
                "itemName": "Gas Nobelisk",
                "amount": 5
            }
        ]
    },
    {
        "name": "Alternate: Polyester Fabric",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Polymer Resin",
                "amount": 30
            },
            {
                "itemName": "Water",
                "amount": 30000
            }
        ],
        "outputs": [
            {
                "itemName": "Fabric",
                "amount": 30
            }
        ]
    },
    {
        "name": "Fabric",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Mycelia",
                "amount": 15
            },
            {
                "itemName": "Biomass",
                "amount": 75
            }
        ],
        "outputs": [
            {
                "itemName": "Fabric",
                "amount": 15
            }
        ]
    },
    {
        "name": "Synthetic Power Shard",
        "producedIn": "Quantum Encoder",
        "inputs": [
            {
                "itemName": "Time Crystal",
                "amount": 10
            },
            {
                "itemName": "Dark Matter Crystal",
                "amount": 10
            },
            {
                "itemName": "Quartz Crystal",
                "amount": 60
            },
            {
                "itemName": "Excited Photonic Matter",
                "amount": 60000
            }
        ],
        "outputs": [
            {
                "itemName": "Power Shard",
                "amount": 5
            },
            {
                "itemName": "Dark Matter Residue",
                "amount": 60000
            }
        ]
    },
    {
        "name": "Power Shard (5)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Purple Power Slug",
                "amount": 2.5
            }
        ],
        "outputs": [
            {
                "itemName": "Power Shard",
                "amount": 12.5
            }
        ]
    },
    {
        "name": "Power Shard (2)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Yellow Power Slug",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Power Shard",
                "amount": 10
            }
        ]
    },
    {
        "name": "Pulse Nobelisk",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Nobelisk",
                "amount": 5
            },
            {
                "itemName": "Crystal Oscillator",
                "amount": 1
            }
        ],
        "outputs": [
            {
                "itemName": "Pulse Nobelisk",
                "amount": 5
            }
        ]
    },
    {
        "name": "Shatter Rebar",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Rebar",
                "amount": 10
            },
            {
                "itemName": "Quartz Crystal",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Shatter Rebar",
                "amount": 5
            }
        ]
    },
    {
        "name": "Turbo Rifle Ammo",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Rifle Ammo",
                "amount": 125
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 15
            },
            {
                "itemName": "Packaged Turbofuel",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Turbo Rifle Ammo",
                "amount": 250
            }
        ]
    },
    {
        "name": "Turbo Rifle Ammo",
        "producedIn": "Blender",
        "inputs": [
            {
                "itemName": "Rifle Ammo",
                "amount": 125
            },
            {
                "itemName": "Aluminum Casing",
                "amount": 15
            },
            {
                "itemName": "Turbofuel",
                "amount": 15000
            }
        ],
        "outputs": [
            {
                "itemName": "Turbo Rifle Ammo",
                "amount": 250
            }
        ]
    },
    {
        "name": "Nuke Nobelisk",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Nobelisk",
                "amount": 2.5
            },
            {
                "itemName": "Encased Uranium Cell",
                "amount": 10
            },
            {
                "itemName": "Smokeless Powder",
                "amount": 5
            },
            {
                "itemName": "AI Limiter",
                "amount": 3
            }
        ],
        "outputs": [
            {
                "itemName": "Nuke Nobelisk",
                "amount": 0.5
            }
        ]
    },
    {
        "name": "Rifle Ammo",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper Sheet",
                "amount": 15
            },
            {
                "itemName": "Smokeless Powder",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Rifle Ammo",
                "amount": 75
            }
        ]
    },
    {
        "name": "Explosive Rebar",
        "producedIn": "Manufacturer",
        "inputs": [
            {
                "itemName": "Iron Rebar",
                "amount": 10
            },
            {
                "itemName": "Smokeless Powder",
                "amount": 10
            },
            {
                "itemName": "Steel Pipe",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Explosive Rebar",
                "amount": 5
            }
        ]
    },
    {
        "name": "Cluster Nobelisk",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Nobelisk",
                "amount": 7.5
            },
            {
                "itemName": "Smokeless Powder",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Cluster Nobelisk",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "Nobelisk",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Black Powder",
                "amount": 20
            },
            {
                "itemName": "Steel Pipe",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "Nobelisk",
                "amount": 10
            }
        ]
    },
    {
        "name": "Smokeless Powder",
        "producedIn": "Refinery",
        "inputs": [
            {
                "itemName": "Black Powder",
                "amount": 20
            },
            {
                "itemName": "Heavy Oil Residue",
                "amount": 10000
            }
        ],
        "outputs": [
            {
                "itemName": "Smokeless Powder",
                "amount": 20
            }
        ]
    },
    {
        "name": "Snowball",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Actual Snow",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Snowball",
                "amount": 5
            }
        ]
    },
    {
        "name": "FICSMAS Wonder Star",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "FICSMAS Decoration",
                "amount": 5
            },
            {
                "itemName": "Candy Cane",
                "amount": 20
            }
        ],
        "outputs": [
            {
                "itemName": "FICSMAS Wonder Star",
                "amount": 1
            }
        ]
    },
    {
        "name": "FICSMAS Decoration",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "FICSMAS Tree Branch",
                "amount": 15
            },
            {
                "itemName": "FICSMAS Ornament Bundle",
                "amount": 6
            }
        ],
        "outputs": [
            {
                "itemName": "FICSMAS Decoration",
                "amount": 2
            }
        ]
    },
    {
        "name": "FICSMAS Ornament Bundle",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Copper FICSMAS Ornament",
                "amount": 5
            },
            {
                "itemName": "Iron FICSMAS Ornament",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "FICSMAS Ornament Bundle",
                "amount": 5
            }
        ]
    },
    {
        "name": "Red FICSMAS Ornament",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Red FICSMAS Ornament",
                "amount": 5
            }
        ]
    },
    {
        "name": "Blue FICSMAS Ornament",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Blue FICSMAS Ornament",
                "amount": 10
            }
        ]
    },
    {
        "name": "Copper FICSMAS Ornament",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Red FICSMAS Ornament",
                "amount": 10
            },
            {
                "itemName": "Copper Ingot",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Copper FICSMAS Ornament",
                "amount": 5
            }
        ]
    },
    {
        "name": "Iron FICSMAS Ornament",
        "producedIn": "Foundry",
        "inputs": [
            {
                "itemName": "Blue FICSMAS Ornament",
                "amount": 15
            },
            {
                "itemName": "Iron Ingot",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Iron FICSMAS Ornament",
                "amount": 5
            }
        ]
    },
    {
        "name": "Actual Snow",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 25
            }
        ],
        "outputs": [
            {
                "itemName": "Actual Snow",
                "amount": 10
            }
        ]
    },
    {
        "name": "FICSMAS Tree Branch",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "FICSMAS Tree Branch",
                "amount": 10
            }
        ]
    },
    {
        "name": "FICSMAS Bow",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "FICSMAS Bow",
                "amount": 5
            }
        ]
    },
    {
        "name": "Candy Cane",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "FICSMAS Gift",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Candy Cane",
                "amount": 5
            }
        ]
    },
    {
        "name": "Biomass (Leaves)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Leaves",
                "amount": 120
            }
        ],
        "outputs": [
            {
                "itemName": "Biomass",
                "amount": 60
            }
        ]
    },
    {
        "name": "Biomass (Wood)",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Wood",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Biomass",
                "amount": 300
            }
        ]
    },
    {
        "name": "Reinforced Iron Plate",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "Iron Plate",
                "amount": 30
            },
            {
                "itemName": "Screw",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Reinforced Iron Plate",
                "amount": 5
            }
        ]
    },
    {
        "name": "Concrete",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Limestone",
                "amount": 45
            }
        ],
        "outputs": [
            {
                "itemName": "Concrete",
                "amount": 15
            }
        ]
    },
    {
        "name": "Screw",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Iron Rod",
                "amount": 10
            }
        ],
        "outputs": [
            {
                "itemName": "Screw",
                "amount": 40
            }
        ]
    },
    {
        "name": "Cable",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Wire",
                "amount": 60
            }
        ],
        "outputs": [
            {
                "itemName": "Cable",
                "amount": 30
            }
        ]
    },
    {
        "name": "Wire",
        "producedIn": "Constructor",
        "inputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 15
            }
        ],
        "outputs": [
            {
                "itemName": "Wire",
                "amount": 30
            }
        ]
    },
    {
        "name": "Copper Ingot",
        "producedIn": "Smelter",
        "inputs": [
            {
                "itemName": "Copper Ore",
                "amount": 30
            }
        ],
        "outputs": [
            {
                "itemName": "Copper Ingot",
                "amount": 30
            }
        ]
    },
    {
        "name": "Sweet Fireworks",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "FICSMAS Tree Branch",
                "amount": 15
            },
            {
                "itemName": "Candy Cane",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Sweet Fireworks",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "Fancy Fireworks",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "FICSMAS Tree Branch",
                "amount": 10
            },
            {
                "itemName": "FICSMAS Bow",
                "amount": 7.5
            }
        ],
        "outputs": [
            {
                "itemName": "Fancy Fireworks",
                "amount": 2.5
            }
        ]
    },
    {
        "name": "Sparkly Fireworks",
        "producedIn": "Assembler",
        "inputs": [
            {
                "itemName": "FICSMAS Tree Branch",
                "amount": 7.5
            },
            {
                "itemName": "Actual Snow",
                "amount": 5
            }
        ],
        "outputs": [
            {
                "itemName": "Sparkly Fireworks",
                "amount": 2.5
            }
        ]
    }
]