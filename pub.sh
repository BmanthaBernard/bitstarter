#!/bin/bash
date
git add .
git commit -m "autopublish 'date'"
git push origin master
git push heroku master 
