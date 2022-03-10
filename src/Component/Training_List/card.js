/* eslint-disable react/jsx-pascal-case */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './card.css';
import Nav_side from '../Nav_side';


export default function TrainingList() {
    const [post, setPosts] = useState([]);


    // useEffect(async () => {
    //     fetchProducts();
    // }, []);
    // const fetchProducts = () => {
    //     axios
    //   .get('https://shoppingapiacme.herokuapp.com/shopping')
    //         .get('https://iteg.herokuapp.com/api/Student_Reg/List')
    //         .then((res) => {
    //             console.log(res);
    //             setPosts(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    useEffect(() => {

        fetch("https://iteg.herokuapp.com/api/Student_Reg/List").then((result) => {
            result.json().then((response) => {
                console.log("result", response)
                setPosts(response.data);
            });
        });
    }, []);
    console.log(post);
    return (
        <div>
            <Nav_side />

            <div class="row">
                {post.map((product) => (
                    <div class="d-flex justify-content-around">
                        <div class="card col-4">
                            <div class="d-flex justify-content-center col-12 p-1" id="compName">
                                {/* {product.FirstName} */}
                                Company Name
                            </div>
                            <div class="form-group row">
                                <label for="trainerName" class=" col-sm-4 col-form-label" id="subHeading">Trainer Name</label>
                                <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="trainerName" value={product.FirstName + " " + product.LastName} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="trainingSubject" class="col-sm-4 col-form-label" id="subHeading">Training Subject</label>
                                <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="trainingSubject" value={product.Profile} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="startDate" class="col-sm-4 col-form-label" id="subHeading">Start Date</label>
                                <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="startDate" value={product.date} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="trainingDuration" class="col-sm-4 col-form-label" id="subHeading">Traning Duration</label>
                                <div class="col-sm-7">
                                    <input type="text" readonly class="form-control-plaintext" id="trainingDuration" value={product.date} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}