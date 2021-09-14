import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    post.selectedFile
                        ? post.selectedFile
                        : 'https://via.placeholder.com/1000x500?text=No%20Image'
                }
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="caption" color="textSecondary">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant="h5">
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;&nbsp;Like&nbsp;
                    {post.likeCount}
                </Button>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
