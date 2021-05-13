## Installing PETSc v3.14

```bash
git clone https://github.com/petsc/petsc
git checkout v3.14
# view current branch
git branch -a

# need to install make/gcc/g++/gfortran
./configure --with-cc=gcc --with-cxx=g++ --with-fc=gfortran --download-openmpi --download-fblaslapack

make PETSC_DIR=/repos/petsc PETSC_ARCH=arch-linux-c-debug all
make PETSC_DIR=/repos/petsc PETSC_ARCH=arch-linux-c-debug check

# update .bashrc
export PETSC_DIR=/repos/petsc
export PETSC_ARCH=arch-linux-c-debug
```

## Installing PERMON

```bash
# PERMON 
git clone https://github.com/permon/permon
export PERMON_DIR=/repos/permon
make

# PERMONSVM
git clone https://github.com/permon/permonsvm
export PERMON_SVM_DIR=/repos/permonsvm
make

# Test out code
DATA_DIR=src/tutorials/data

./runsvmmpi 2 -f_training $DATA_DIR/heart_scale.bin -f_test $DATA_DIR/heart_scale.t.bin output/ex2.out -qps_view_convergence -svm_view -svm_view_score > output.txt
```

