import { useEffect, useState, ChangeEvent, FC, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Alert from '../UI/Alert/Alert';

// type EventBodyProps = {
//   title: string;
//   start: string;
//   end: string;
//   isPrivate: boolean;
//   description: string;
//   disableEdit: boolean;
//   createdById?: string;
//   onTitle: (title: string) => void;
//   onStart: (date: string) => void;
//   onEnd: (date: string) => void;
//   onIsPrivate: (isPrivate: boolean) => void;
//   onDescription: (description: string) => void;
//   onValidate: (valid: boolean) => void;
// };

// const EventBody: FC<EventBodyProps> = (props) => {
//   const [title, setTitle] = useState<string>(props.title);
//   const [start, setStart] = useState<string>(props.start);
//   const [end, setEnd] = useState<string>(props.end);
//   const [isPrivate, setIsPrivate] = useState<boolean>(props.isPrivate);
//   const [description, setDescription] = useState<string>(props.description);

//   const [errorMsg, setErrorMsg] = useState<string>('');

//   const authCtx = useContext(AuthContext);

//   console.log('EventBody...');


//   const handleTitleChange = (event) => {
//     const { value } = event.target;

//     setTitle(value);
//     validateEventDates(start, end, value);
//     props.onTitle(value);
//   };

//   const handleStartChange = (event) => {
//     const { value } = event.target;

//     setStart(value);
//     validateEventDates(value, end, title);
//     props.onStart(value);
//   };

//   const handleEndChange = (event) => {
//     const { value } = event.target;

//     setEnd(value);
//     validateEventDates(start, value, title);
//     props.onEnd(value);
//   };

//   const handleDescriptionChange = (event) => {
//     const { value } = event.target;
//     setDescription(value);
//     props.onDescription(value);
//   };

//   const handleIsPrivateChange = (event) => {
//     const { checked } = event.target;
//     setIsPrivate(checked);
//     props.onIsPrivate(checked);
//   };

//   useEffect(
//     () => {
//       const auth = authCtx.getAuth();
//       const today = new Date();
//       const endDate = new Date(end);

//       if (auth?.userId === props.createdById || props.createdById === '') {
//         if (endDate.getTime() < today.getTime()) {
//           setErrorMsg("Event can't be saved in the past.");
//           props.onValidate(false);
//         }
//       }
//     },
//     // eslint-disable-next-line
//     []
//   );

//   return (
//     <div className="row g-3">
//       <div className="col-12 required">
//         <label htmlFor="title" className="form-label">
//           Title
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           disabled={props.disableEdit}
//           id="title"
//           placeholder="Title"
//           maxLength={50}
//           value={title}
//           onChange={handleTitleChange}
//         />
//       </div>
//       <div className="col-md-6 required">
//         <label htmlFor="start" className="form-label">
//           Start
//         </label>
//         <input
//           type="datetime-local"
//           className="form-control"
//           disabled={props.disableEdit}
//           id="start"
//           placeholder="Start"
//           value={start}
//           onChange={handleStartChange}
//         />
//       </div>
//       <div className="col-md-6 required">
//         <label htmlFor="end" className="form-label">
//           End
//         </label>
//         <input
//           type="datetime-local"
//           className="form-control"
//           disabled={props.disableEdit}
//           id="end"
//           min={start}
//           value={end}
//           placeholder="End"
//           onChange={handleEndChange}
//         />
//       </div>
//       {errorMsg && !props.disableEdit && (
//         <div className="col-12">
//           <Alert
//             msg={errorMsg}
//             type="warning"
//             ariaLabel="Warning"
//             fillType="#exclamation-triangle-fill"
//           />
//         </div>
//       )}
//       <div className="col-12">
//         <label htmlFor="description" className="form-label">
//           Description
//         </label>
//         <textarea
//           className="form-control"
//           disabled={props.disableEdit}
//           id="description"
//           rows={3}
//           value={description}
//           maxLength={1000}
//           onChange={handleDescriptionChange}
//         ></textarea>
//       </div>
//       <div className="col-12">
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             disabled={props.disableEdit}
//             id="gridCheck"
//             checked={isPrivate}
//             onChange={handleIsPrivateChange}
//           />
//           <label className="form-check-label" htmlFor="gridCheck">
//             Private (event is only visible to you)
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

export default EventBody;