pipeline {
  agent any

  options {
    disableConcurrentBuilds()
    timestamps()
  }

  environment {
    REFERENCE_BRANCH = 'master'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        sh '''
          git fetch --all --prune
          git checkout "${REFERENCE_BRANCH}"
          git pull origin "${REFERENCE_BRANCH}" || true
        '''
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }

  post {
    success {
      echo "Pipeline executada com sucesso na branch ${REFERENCE_BRANCH}."
    }
    failure {
      echo "Pipeline falhou. Verifique os logs da execução."
    }
  }
}
