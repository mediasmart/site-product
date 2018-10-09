pipeline {
  agent {
    docker {
      image 'basic-9.11:latest'
      args '--network="host"'
    }
  }
  stages {
    stage('deploy') {
      when {
        branch 'gh-pages'
      }
      steps {
        sh 'ssh -oStrictHostKeyChecking=no ubuntu@gitrepos.mediasmart.mobi "cd site && git checkout gh-pages && git pull"'
        sh '''
          cd ~
          npm install inits
          npm install git+ssh://ubuntu@gitrepos.mediasmart.io:common
          git clone git@github.com:mediasmart/server-config.git
          cd /home/ubuntu/server-config
          npm install
          node bin/deploy-matrix.js --site
        '''
      }
    }
  }
}
