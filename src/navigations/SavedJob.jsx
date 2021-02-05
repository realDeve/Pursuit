import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import JobList from '../component/JobList.component';
import { useDisclosure } from '@chakra-ui/react';

import SkeletonLoader from '../component/SkeletonLoader.component';
import { getSavedJob } from "../redux/SaveJob/action"
import Model from "../component/Model.component";
 

function Saved({getSavedJob,feed}) {
    
    const {savedJob:{jobs,isLoading},userAuth:{profile:{uid}}}=feed

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedJob,setSeletedJob]= useState();
  
    useEffect(() => {

        getSavedJob("LWPqNfL8yqMshLppoowyKJ9uEt02")

       
        
    }, [])

  
   
    

    const savedFeed = <JobList
        feed={jobs}
        isApplied={true}
        onOpen={onOpen} 
        setSeletedJob={setSeletedJob}/>

     return (
        <div>
             {isLoading ? <SkeletonLoader /> : savedFeed}
             
             {selectedJob && <Model uid={uid}  isOpen={isOpen}  onClose={onClose} selectedJob={selectedJob}/>}

        </div>
    )
}
const mapStateToProps=({savedJob,userAuth})=>({
    feed:{savedJob,userAuth}
})

export default connect(mapStateToProps,{getSavedJob})(Saved)