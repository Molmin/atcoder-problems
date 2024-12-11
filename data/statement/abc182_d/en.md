Score : $400$ points

## Problem Statement

Given is a number sequence $A_1, A_2, A_3, \dots, A_N$, which may contain negative elements.<br>
On a number line, there is a robot at coordinate $0$. It will do the following actions in order:  

- Move $A_1$ in the positive direction.
- Move $A_1$ in the positive direction, and then move $A_2$ in the positive direction.
- Move $A_1$ in the positive direction, then move $A_2$ in the positive direction, and then move $A_3$ in the positive direction.

$\hspace{140pt} \vdots$  

- Move $A_1$ in the positive direction, then move $A_2$ in the positive direction, then move $A_3$ in the positive direction, $\ldots$, $\dots$, and then move $A_N$ in the positive direction.

Find the greatest coordinate occupied by the robot from the beginning to the end of the process.

## Constraints

- $1 \le N \le 200000$
- $-10^8 \le A_i \le 10^8$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots \hspace{5pt} A_N$

## Output

Print the greatest coordinate occupied by the robot from the beginning to the end of the process.

```input1
3
2 -1 -2
```

```output1
5
```

The robot moves as follows:

- Move $2$ in the positive direction, to coordinate $2$.
- Move $2$ in the positive direction, to coordinate $4$. Then move $-1$ in the positive direction, to coordinate $3$.
- Move $2$ in the positive direction, to coordinate $5$. Then move $-1$ in the positive direction, to coordinate $4$. Then move $-2$ in the positive direction, to coordinate $2$.

The greatest coordinate occupied during the process is $5$, so we should print $5$.

```input2
5
-2 1 3 -1 -1
```

```output2
2
```

```input3
5
-1000 -1000 -1000 -1000 -1000
```

```output3
0
```

In this case, the initial coordinate $0$ is the greatest coordinate occupied.