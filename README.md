# ANA Dataset Website

### Files

The static assets are in the `static` directory. The layout and templates are in the `wiki` directory, and the pages live in the `wiki > pages` directory.

    |__ static/             -> static assets (CSS and JavaScript files only)
    |__ wiki/               -> Main directory for the pages and layouts
        |__ footer.html     -> Footer that will appear in all the pages
        |__ layout.html     -> Main layout of the website. All the pages will follow its structure
        |__ menu.html       -> Menu that will appear in all the pages
        |__ pages/          -> Directory for all the pages
            |__ *.html      -> Actual pages of the website
    |__ .gitignore          -> Tells GitHub which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml      -> Automated flow for building, testing and deploying the website.
    |__ README.md           -> File containing the text you are reading right now
    |__ app.py              -> Python code managing the website
    |__ dependencies.txt    -> Software dependencies from the Python code

### Technologies

  * [Python](https://www.python.org): Programming language
  * [Flask](https://palletsprojects.com/p/flask/): Python framework
  * [Fronzen-Flask](https://pythonhosted.org/Frozen-Flask): Library that builds the wiki to be deployed as a static website
  * [Bootstrap](https://getbootstrap.com/docs/5.0/components): CSS and JS components used

### Building locally

To work locally with this project, you'll have to follow the steps below:

#### Install
```bash
git clone https://gitlab.igem.org/2022/nthu-taiwan
cd example
python3 -m venv venv
. venv/bin/activate
pip install -r dependencies.txt
```

#### Execute
```bash
python3 app.py
```
