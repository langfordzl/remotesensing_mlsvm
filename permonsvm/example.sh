#!/bin/bash

DATA_DIR=src/tutorials/data

./runsvmmpi 2 -f_training $DATA_DIR/heart_scale.bin -f_test $DATA_DIR/heart_scale.t.bin output/ex2.out -qps_view_convergence -svm_view -svm_view_score > output.txt

# mpirun -n 2 /home/lql/Desktop/rs_mlsvm/repo/petsc_permon/permonsvm/arch-linux-c-debug/bin/permonsvmfile -f_training src/tutorials/data/heart_scale.bin -f_test src/tutorials/data/heart_scale.t.bin

#./permonsvmfile -f_training /home/lql/Desktop/rs_mlsvm/repo/petsc_permon/permonsvm/src/tutorials/data/heart_scale.bin -f_test /home/lql/Desktop/rs_mlsvm/repo/petsc_permon/permonsvm/src/tutorials/data/heart_scale.t.bin
