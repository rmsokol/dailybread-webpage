document.addEventListener('DOMContentLoaded', function() {
    const nutrientData = [
        {
            name: "Vitamin A",
            intake: "700-900 mcg RAE",
            sources: "Liver, sweet potatoes, carrots, spinach, kale, dairy products, fortified cereals",
            functions: "Vision, immune function, cell growth, reproduction",
            notes: "RAE = Retinol Activity Equivalents. Excessive intake from supplements can be harmful."
        },
        {
            name: "Vitamin B1 (Thiamin)",
            intake: "1.1-1.2 mg",
            sources: "Pork, whole grains, brown rice, legumes, nuts, seeds",
            functions: "Energy metabolism, nerve function",
            notes: ""
        },
        {
            name: "Vitamin B2 (Riboflavin)",
            intake: "1.1-1.3 mg",
            sources: "Dairy products, eggs, meat, green leafy vegetables, fortified cereals",
            functions: "Energy metabolism, cell growth, vision",
            notes: ""
        },
        {
            name: "Vitamin B3 (Niacin)",
            intake: "14-16 mg NE",
            sources: "Meat, poultry, fish, whole grains, fortified cereals, nuts, seeds",
            functions: "Energy metabolism, DNA repair",
            notes: "NE = Niacin Equivalents. High doses from supplements can cause flushing."
        },
        {
            name: "Vitamin B5 (Pantothenic Acid)",
            intake: "5 mg (AI)",
            sources: "Chicken, beef, potatoes, oats, tomatoes, broccoli",
            functions: "Energy metabolism, hormone production",
            notes: "AI = Adequate Intake (when RDA isn't established)."
        },
        {
            name: "Vitamin B6 (Pyridoxine)",
            intake: "1.3-1.7 mg",
            sources: "Poultry, fish, potatoes, bananas, fortified cereals",
            functions: "Brain development, immune function, protein metabolism",
            notes: ""
        },
        {
            name: "Vitamin B7 (Biotin)",
            intake: "30 mcg (AI)",
            sources: "Eggs, liver, salmon, avocado, sweet potatoes, nuts, seeds",
            functions: "Energy metabolism, cell growth",
            notes: ""
        },
        {
            name: "Vitamin B9 (Folate/Folic Acid)",
            intake: "400 mcg DFE",
            sources: "Leafy green vegetables, legumes, fortified grains, citrus fruits",
            functions: "Cell growth, DNA synthesis, red blood cell formation",
            notes: "DFE = Dietary Folate Equivalents. Important for pregnant women to prevent neural tube defects."
        },
        {
            name: "Vitamin B12 (Cobalamin)",
            intake: "2.4 mcg",
            sources: "Meat, poultry, fish, eggs, dairy products, fortified foods",
            functions: "Nerve function, DNA synthesis, red blood cell formation",
            notes: "Vegans/vegetarians may need supplements or fortified foods."
        },
        {
            name: "Vitamin C (Ascorbic Acid)",
            intake: "75-90 mg",
            sources: "Citrus fruits, berries, peppers, broccoli, tomatoes, potatoes",
            functions: "Antioxidant, immune function, collagen synthesis, iron absorption",
            notes: "Smokers need more."
        },
        {
            name: "Vitamin D",
            intake: "15-20 mcg (600-800 IU)",
            sources: "Fatty fish, fortified dairy products, fortified cereals, egg yolks, sunlight exposure",
            functions: "Calcium absorption, bone health, immune function",
            notes: "Many people are deficient, especially in winter."
        },
        {
            name: "Vitamin E",
            intake: "15 mg",
            sources: "Vegetable oils, nuts, seeds, green leafy vegetables",
            functions: "Antioxidant, immune function",
            notes: ""
        },
        {
            name: "Vitamin K",
            intake: "90-120 mcg",
            sources: "Green leafy vegetables, broccoli, vegetable oils",
            functions: "Blood clotting, bone health",
            notes: ""
        },
        {
            name: "Calcium",
            intake: "1000-1200 mg",
            sources: "Dairy products, leafy green vegetables, fortified foods (tofu, plant-based milk)",
            functions: "Bone health, muscle function, nerve function",
            notes: "Vitamin D is crucial for absorption."
        },
        {
            name: "Chloride",
            intake: "2300 mg (AI)",
            sources: "Table salt, seaweed, rye, tomatoes, lettuce, celery, olives",
            functions: "Fluid balance, electrolyte balance",
            notes: ""
        },
        {
            name: "Chromium",
            intake: "20-35 mcg (AI)",
            sources: "Broccoli, grapes, potatoes, garlic, basil",
            functions: "Glucose metabolism, insulin sensitivity",
            notes: ""
        },
        {
            name: "Copper",
            intake: "900 mcg",
            sources: "Liver, shellfish, nuts, seeds, chocolate, whole grains",
            functions: "Iron metabolism, nerve function, immune function",
            notes: ""
        },
        {
            name: "Fluoride",
            intake: "3-4 mg (AI)",
            sources: "Fluoridated water, seafood, tea",
            functions: "Bone health, dental health",
            notes: ""
        },
        {
            name: "Iodine",
            intake: "150 mcg",
            sources: "Iodized salt, seaweed, dairy products, seafood",
            functions: "Thyroid hormone production",
            notes: ""
        },
        {
            name: "Iron",
            intake: "8-18 mg",
            sources: "Red meat, poultry, fish, beans, lentils, spinach, fortified cereals",
            functions: "Oxygen transport, energy production, immune function",
            notes: "Women need more than men. Heme iron (animal sources) is more easily absorbed."
        },
        {
            name: "Magnesium",
            intake: "310-420 mg",
            sources: "Nuts, seeds, whole grains, leafy green vegetables, legumes",
            functions: "Muscle function, nerve function, blood sugar control, blood pressure regulation",
            notes: ""
        },
        {
            name: "Manganese",
            intake: "1.8-2.3 mg (AI)",
            sources: "Whole grains, nuts, seeds, tea, leafy green vegetables",
            functions: "Bone formation, metabolism, antioxidant function",
            notes: ""
        },
        {
            name: "Molybdenum",
            intake: "45 mcg (AI)",
            sources: "Legumes, grains, nuts, leafy greens",
            functions: "Enzyme cofactor",
            notes: ""
        },
        {
            name: "Phosphorus",
            intake: "700 mg",
            sources: "Dairy products, meat, poultry, fish, nuts, seeds, whole grains",
            functions: "Bone health, energy production, cell function",
            notes: ""
        },
        {
            name: "Potassium",
            intake: "2600-3400 mg (AI)",
            sources: "Bananas, potatoes, sweet potatoes, spinach, beans, yogurt",
            functions: "Fluid balance, blood pressure regulation, muscle function, nerve function",
            notes: ""
        },
        {
            name: "Selenium",
            intake: "55 mcg",
            sources: "Brazil nuts, seafood, meat, poultry, eggs",
            functions: "Antioxidant, thyroid hormone metabolism, immune function",
            notes: ""
        },
        {
            name: "Sodium",
            intake: "< 2300 mg",
            sources: "Table salt, processed foods",
            functions: "Fluid balance, nerve function, muscle function",
            notes: "Most people consume too much."
        },
        {
            name: "Zinc",
            intake: "8-11 mg",
            sources: "Meat, poultry, shellfish, beans, nuts, seeds, whole grains",
            functions: "Immune function, wound healing, cell growth",
            notes: ""
        }
    ];

    const tableBody = document.querySelector("#nutrientTable tbody");

    nutrientData.forEach(nutrient => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${nutrient.name}</td>
            <td>${nutrient.intake}</td>
            <td>${nutrient.sources}</td>
            <td>${nutrient.functions}</td>
            <td>${nutrient.notes}</td>
        `;
        tableBody.appendChild(row);
    });
});
