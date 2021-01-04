# Data Preparation Steps
Here are the necessary steps to convert the data for MLSVM.

- Follow the steps in img_to_csv.ipynb
  - Main goal is to have -1 for majority class (e.g., not fire) and 1 for minority class (e.g., fire)
  - Need to save (or move) data to the datasets directory (mlsvm/src/datasets)
- Edit the params.xml file located in mlsvm/src directory
  - Change ds_name to the saved csv created in the above step (line 22)
- Run bash compile_all.sh and buildAll.sh (located in mlsvm/src)
- Run ./mlsvm_csv_petsc (located in mlsvm/src)
- Run ./mlsvm_zscore
- Run ./mlsvm_save_knn
  - Note: had to edit mlsvm_save_knn.cc for Python path (if Python path is the same [/usr/bin/python2] then just move this file into mlsvm/src/tools)
  - Note: also changed flann.py to point to PETSc Python scripts (you will need to change this to your location [petsc/lib/petsc/bin])
- Run ./mlsvm_classifier

## Load Model and Run Statistics

First load the MLSVM model in Python (using LibSVM library)