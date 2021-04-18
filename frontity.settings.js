const settings = {
  "name": "prairie-health-blog",
  "state": {
    "frontity": {
      "url": "https://www.prairiehealth.co",
      "title": "Prairie Health | Blog",
      "description": "Prairie Health Blog"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "All",
              "/"
            ],
            [
              "Anxiety",
              "/category/anxiety/"
            ],
            [
              "Depression",
              "/category/depression/"
            ],
            [
              "Mental Health Tips",
              "/category/mental-health-tips/"
            ],
            [
              "Medication",
              "/category/medication/"
            ],
            [
              "COVID",
              "/category/covid/"
            ],
            [
              "Lifestyle",
              "/category/lifestyle/"
            ],
            [
              "Genetic Testing",
              "/category/genetic-testing/"
            ]
          ],
          "showSearchInHeader": true,
          "showAllContentOnArchive": true,
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          "fontSets": "us-ascii"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.prairiehealth.co/blog",
          //"api": "https://www.prairiehealth.co/blog/wp-json",
          "params": {
            "per_page": 6,
            "type": ["post"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
