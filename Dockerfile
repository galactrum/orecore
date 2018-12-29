# setup a centos image with orecore binary components
FROM centos:latest
MAINTAINER GAB5TER <GAB5TER@protonmail.com>
RUN yum -y install git curl which xz tar findutils
RUN groupadd orecore
RUN useradd orecore -m -s /bin/bash -g orecore
ENV HOME /home/orecore
USER orecore
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
RUN /bin/bash -l -c "nvm install v4 && nvm alias default v4"
RUN /bin/bash -l -c "npm install orecore -g"

