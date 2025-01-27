import React from "react";
import CartItem from "./CartItem";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../state/Order/Action";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
}

const calculateTotalAmount = (cartItems) => {
  const itemTotal = cartItems.reduce((total, item) => total + item.food.price * item.quantity, 0);
  const deliveryFee = 21; // Example delivery fee
  const gstAndCharges = 33; // Example GST and charges
  return itemTotal + deliveryFee + gstAndCharges;
};

// const validationSchema = Yup.object().shape({
//   streetAddress: Yup.string().required("Street address is required"),
//   state: Yup.string().required("State is required"),
//   pincode: Yup.string().required("Pincode is required"),
//   city: Yup.string().required("City is required"),
// });

const items = [1, 1];

function Cart({ item, showButton, handleSelectAddress }) {
  const [open, setOpen] = React.useState(false);
  const auth = useSelector((store) => store.auth);
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch()
  const handleClose = () => setOpen(false);

  const createOrderUsingSelectedAddress = () => { };

  const handleOpenAddressModel = () => {
    setOpen(true);
  };

  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems.length > 0 ? cart.cartItems[0].food?.restaurant.id : null,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.pincode,
          country: "ethiopia"
        }
      }
    }
    dispatch(createOrder(data))
    console.log("Form value", values);
  };

  const totalAmount = calculateTotalAmount(cart.cartItems);

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>${cart.cartItems.reduce((total, item) => total + item.food.price * item.quantity, 0)}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>#21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and restaurant Charges</p>
                <p>#33</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total pay</p>
              <p>${totalAmount}</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModel}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      // error={touched.streetAddress && Boolean(errors.streetAddress)}
                      // helperText={
                      //   <ErrorMessage name="streetAddress">
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                      // error={touched.state && Boolean(errors.state)}
                      // helperText={
                      //   <ErrorMessage name="state">
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="city"
                      fullWidth
                      variant="outlined"
                      // error={touched.pincode && Boolean(errors.pincode)}
                      // helperText={
                      //   <ErrorMessage name="pincode">
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="pincode"
                      fullWidth
                      variant="outlined"
                      // error={touched.city && Boolean(errors.city)}
                      // helperText={
                      //   <ErrorMessage name="city">
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Delivery Here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default Cart;
