# Ecommerce Website (SHOP EASE)
- It is developer with the help of MERN for the practice of redux state management 

## Learn under the Redux 
- Step 1: Created a folder redux with file store.js and slice.js where slice.js is a combination of actions and reducers
- Step 2: Added functionalities like addItem, RemoveItem and clearItem from store and addToCart section.
While creating these functionalities i have got to know three main predefined functions and they are <br/>
  - createSlice() it is used for creating a slice or functionalities function inside it
  - configureStore() it adds the reducers from slice directly.
  - useDispatch() it is used for returning reference to the dispatch function.

  ### For calling an API using Redux
  - For calling an API using redux we use createAsyncThunk() functions 
  - We create extraReducers when we are handling the asynchronous actions or data and while responding to actons from another slice.
  
