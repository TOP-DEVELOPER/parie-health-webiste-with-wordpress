const settings = {
  "name": "prairie-health-blog",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
              "Therapy",
              "/category/therapy/"
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
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.prairiehealth.co/blog",
          "params": {
            "per_page": 50,
            "type": ["post"],
          },
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
