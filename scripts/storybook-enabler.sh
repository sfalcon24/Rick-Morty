#!/bin/bash

STORYBOOK_KEY="SB=1"

ACTION="$1"
ENV="$2"

if [ "$ENV" == "" ]
then 
    grep -v $STORYBOOK_KEY .env > temp && mv temp .env
    if [ "$ACTION" == "on" ]
    then
        yarn sb:getstories
        echo $STORYBOOK_KEY >> .env
    fi
else
    grep -v $STORYBOOK_KEY .env.$ENV > temp && mv temp .env.$ENV
    if [ "$ACTION" == "on" ]
    then
        yarn sb:getstories
        echo $STORYBOOK_KEY >> .env.$ENV
    fi
fi

