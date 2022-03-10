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
            <div>
                <div class="d-flex justify-content-center display-4 p-4" id="trainingHeading">
                    Training's
                </div>
            <div class="row row-cols-2 col-11" id="mainRow">
                {post.map((product) => (
                    <div class="col pb-4 pl-4">
                        <div class="card col-10"  id="glass">
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


        </div>
    )
}