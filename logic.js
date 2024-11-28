// Example JSON string with gallery data
const galleryData = `
[
    {
        "title": "Vector Visualizer",
        "description": "A tool for visualizing and editing Vector3 and Vector2 properties directly in the scene.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/vector-visualizer-294644"
    },
    {
        "title": "TimeScale Toolbar",
        "description": "Adds a slider to change the timescale the to the main toolbar.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/timescale-toolbar-291564"
    },
    {
        "title": "Cast Visualizer",
        "description": "Tool extension for the Unity Editor that visualizes all casts and overlap tests in the scene view for fast debugging.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/cast-visualizer-167951"
    },
    {
        "title": "Sticky Notes",
        "description": "This asset allows you to easily add a note to almost any object in Unity Editor!",
        "url": "https://assetstore.unity.com/packages/tools/utilities/sticky-notes-148356"
    },
    {
        "title": "Serialized Dictionary",
        "description": "The best and easiest way to serialize your dictionaries.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/serialized-dictionary-243052"
    },
    {
        "title": "DOTween",
        "description": "ANIMATE ANYTHING via simplified code. DOTween is a fast, efficient, fully type-safe object-oriented animation engine.",
        "url": "https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676"
    },
    {
        "title": "PlayerPrefs Editor",
        "description": "The PlayerPrefs Editor enables easy access to the player preferences over a simple UI.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/playerprefs-editor-167903"
    },
    {
        "title": "Naughty Attributes",
        "description": "It expands the range of attributes that Unity provides so that you can create powerful inspectors.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/naughtyattributes-129996"
    },
    {
        "title": "Scriptable Object Table View",
        "description": "Ccompare and edit multiple Scriptable Objects in a single table view within the editor.",
        "url": "https://assetstore.unity.com/packages/tools/utilities/scriptable-object-table-view-253745"
    },
    {
        "title": "ColoredHeaderCreator",
        "description": "An intuitive and lightweight tool for organising your Unity hierarchy",
        "url": "https://github.com/YoavTC/ColoredHeaderCreator"
    }
]`;

// Parse the JSON string into an object
const galleryItems = JSON.parse(galleryData);

// Function to create a gallery item dynamically
function createGalleryItem(item) {
    // Create the gallery item container
    const galleryItem = document.createElement('a');
    galleryItem.classList.add('gallery-item');

    galleryItem.href = item.url;
    galleryItem.target = "_blank";

    // Create the image element
    const img = document.createElement('img');
    img.src = "Pictures/" + item.title + ".jpg";
    img.alt = item.title;

    // Create the title element
    const title = document.createElement('h3');
    title.textContent = item.title;

    // Create the description element
    const description = document.createElement('p');
    description.textContent = item.description;

    // Append the elements to the gallery item
    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    galleryItem.appendChild(description);

    return galleryItem;
}

// Get the gallery container
const galleryContainer = document.getElementsByClassName('gallery')[0];

// Loop through the JSON data and create gallery items
galleryItems.forEach(item => {
    const newGalleryItem = createGalleryItem(item);
    galleryContainer.appendChild(newGalleryItem);
});
