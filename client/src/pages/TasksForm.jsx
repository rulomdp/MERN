import {Form, Formik} from 'formik'
import createTaskRequest from '../api/task.api'

function TasksForm(){
    return (
        <div>
            <Formik initialValues={{
                title:"",
                description:"",
            }}
            onSubmit={async(values) => {
                console.log(values)
                try{
                    const response = await createTaskRequest(values)
                } catch (error) {
                    console.log(error)
                }

            }}
            >
            {({handleChange,handleSubmit}) => (
                <Form> 
                <label>Title</label>
                <input type="text" 
                    name="title"  
                    placeholder="Write to title"
                    onChange={handleChange}
                    />
                
                <label >Description</label>
                    <textarea 
                        name="Descripcion"
                        rows="3"
                        placeholder="Write a description"
                        onChange={handleChange}
                    ></textarea>
                    <button type='submit'>
                        Save
                    </button>
            </Form>    
            )}                
            </Formik>
        </div>
    )
}

export default TasksForm