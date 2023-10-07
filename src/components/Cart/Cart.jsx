/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */




// eslint-disable-next-line no-unused-vars
const Cart = ({allActor,remaining,totalHour}) => {
    return (
        <div>
            
          
            <h2>Credit Hour Remaining</h2>
            <h2>Course Name: {allActor.length}</h2>
            {
                // eslint-disable-next-line no-unused-vars
                allActor.map(regis=><li key={regis.credit}>{regis.course_name}</li>)
            }
              <h2>Total Credit Hour: {totalHour}</h2>
            <h2>total credit hour remaining: {remaining}</h2>

        <h3>total price:</h3>
        </div>
    );
};

export default Cart;