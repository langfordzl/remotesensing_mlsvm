# Remote Sensing and MLSVM
This repository seeks to use remote sensing datasets (Landsat, MODIS, etc.) with Multilevel Support Vector Machines (MLSVM) for classification problems.
* MLSVM was collected from [here](https://github.com/esadr/mlsvm)
* Requires PETSc, FLANN, pyflann
* Instructions below was performed using Ubuntu 18.04.5 LTS

## Installing PETSc

```bash
git clone https://github.com/petsc/petsc.git
cd petsc

# configure PETSc
./configure \
--with-cc=gcc \
--with-cxx=g++ \
--with-fc=gfortran \
--download-mpich \
--download-fblaslapack \
--download-f2cblaslapack \
--download-metis \
--download-parmetis \
--download-cmake \
--with-clanguage=c++ \
--with-python=1

# install
make all check

# set environmental variables PETSC_DIR and PETSC_ARCH
# specified in ~/.bashrc
export PETSC_DIR=~/petsc # need to change this to your directory
export PETSC_ARCH=arch-linux-cxx-debug
# source ~/.bashrc

# test PETSc
cd src/ksp/ksp/tutorials
make ex50
mpiexec -n 1 ./ex50  -da_grid_x 4 -da_grid_y 4 -mat_view
```

## Installing FLANN/pyflann

```bash
git clone https://github.com/mariusmuja/flann.git

# instructions taken from https://www.cs.ubc.ca/research/flann/uploads/FLANN/flann_manual-1.8.4.pdf
cd flann
mkdir build
cd build/
cmake ..
make

# this should install pyflann also
# test by importing library
python2 -c "import pyflann; print(pyflann)"
```

## Install MLSVM

```bash
git clone https://github.com/esadr/mlsvm.git

cd mlsvm/src

# need to modify config_logs.h to save models
# change the parameter below from 0 to 1
#define export_SVM_models           1

make

# test code
./mlsvm_classifier
```

## Prepare Data!

Read more [here](data_prep/)

