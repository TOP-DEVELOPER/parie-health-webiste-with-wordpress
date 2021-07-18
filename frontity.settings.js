const settings = {
  "name": "prairie-health-blog",
  "state": {
    "frontity": {
      "url": "https://blog.prairiehealth.co",
      "title": "Prairie Health | Blog",
      "description": "Prairie Health Blog"
    },
    "social": {
        "facebook": "https://www.facebook.com/carebyprairie",
        "instagram": "https://www.instagram.com/prairie_health",
        "linkedin": "http://www.linkedin.com/company/31281223/",
    },
    "joinbutton" : {
        "joinbuttonlabel": "Visit Prairie Health",
        "joinbuttonurl": "https://www.prairiehealth.co/",
    },
    "others": {
        "relatedpost": "Related Posts",
    },
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
          "params": {
            "per_page": 12,
            "type": ["post"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-gutenberg-styles"
  ]
};

export default settings;
