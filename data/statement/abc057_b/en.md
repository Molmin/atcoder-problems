Score : $200$ points

## Problem Statement

There are $N$ students and $M$ checkpoints on the $xy$-plane.<br>
The coordinates of the $i$-th student $(1 \leq i \leq N)$ is $(a_i,b_i)$, and the coordinates of the checkpoint numbered $j$ $(1 \leq j \leq M)$ is $(c_j,d_j)$.<br>
When the teacher gives a signal, each student has to go to the nearest checkpoint measured in *Manhattan distance*. <br>
The Manhattan distance between two points $(x_1,y_1)$ and $(x_2,y_2)$ is $|x_1-x_2|+|y_1-y_2|$.<br>
Here, $|x|$ denotes the absolute value of $x$.<br>
If there are multiple nearest checkpoints for a student, he/she will select the checkpoint with the smallest index.<br>
Which checkpoint will each student go to?

## Constraints

- $1 \leq N,M \leq 50$
- $-10^8 \leq a_i,b_i,c_j,d_j \leq 10^8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $:$  
> 
> $a_N$ $b_N$
> 
> $c_1$ $d_1$
> 
> $:$  
> 
> $c_M$ $d_M$

## Output

Print $N$ lines.<br>
The $i$-th line $(1 \leq i \leq N)$ should contain the index of the checkpoint for the $i$-th student to go.

```input1
2 2
2 0
0 0
-1 0
1 0
```

```output1
2
1
```

The Manhattan distance between the first student and each checkpoint is:

- For checkpoint $1$: $|2-(-1)|+|0-0|=3$
- For checkpoint $2$: $|2-1|+|0-0|=1$

The nearest checkpoint is checkpoint $2$. Thus, the first line in the output should contain $2$.

The Manhattan distance between the second student and each checkpoint is:

- For checkpoint $1$: $|0-(-1)|+|0-0|=1$
- For checkpoint $2$: $|0-1|+|0-0|=1$

When there are multiple nearest checkpoints, the student will go to the checkpoint with the smallest index. Thus, the second line in the output should contain $1$.

```input2
3 4
10 10
-10 -10
3 3
1 2
2 3
3 5
3 5
```

```output2
3
1
2
```

There can be multiple checkpoints at the same coordinates.

```input3
5 5
-100000000 -100000000
-100000000 100000000
100000000 -100000000
100000000 100000000
0 0
0 0
100000000 100000000
100000000 -100000000
-100000000 100000000
-100000000 -100000000
```

```output3
5
4
3
2
1
```