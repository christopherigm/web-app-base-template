pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    environment {
        APP_NAME = "web-app"
        BRANCH = sh(script: "echo ${BRANCH}", , returnStdout: true).trim()
    }
    stages {
        stage("Deployment") {
            steps {
                sh "helm upgrade $APP_NAME deployment --set branch=$BRANCH --set tag=$BRANCH"
            }
        }
    }
}