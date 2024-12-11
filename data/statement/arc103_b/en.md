Score : $600$ points

## Problem Statement

Snuke is introducing a **robot arm** with the following properties to his factory:

- The robot arm consists of $m$ **sections** and $m+1$ **joints**. The sections are numbered $1$, $2$, ..., $m$, and the joints are numbered $0$, $1$, ..., $m$. Section $i$ connects Joint $i-1$ and Joint $i$. The length of Section $i$ is $d_i$.
- For each section, its **mode** can be specified individually. There are four modes: `L`, `R`, `D` and `U`. The mode of a section decides the direction of that section. If we consider the factory as a coordinate plane, the position of Joint $i$ will be determined as follows (we denote its coordinates as $(x_i, y_i)$):-   - $(x_0, y_0) = (0, 0)$.
-   - If the mode of Section $i$ is `L`, $(x_{i}, y_{i}) = (x_{i-1} - d_{i}, y_{i-1})$.
-   - If the mode of Section $i$ is `R`, $(x_{i}, y_{i}) = (x_{i-1} + d_{i}, y_{i-1})$.
-   - If the mode of Section $i$ is `D`, $(x_{i}, y_{i}) = (x_{i-1}, y_{i-1} - d_{i})$.
-   - If the mode of Section $i$ is `U`, $(x_{i}, y_{i}) = (x_{i-1}, y_{i-1} + d_{i})$.

Snuke would like to introduce a robot arm so that the position of Joint $m$ can be matched with all of the $N$ points $(X_1, Y_1), (X_2, Y_2), ..., (X_N, Y_N)$ by properly specifying the modes of the sections.
Is this possible?
If so, find such a robot arm and how to bring Joint $m$ to each point $(X_j, Y_j)$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 1000$
- $-10^9 \leq X_i \leq 10^9$
- $-10^9 \leq Y_i \leq 10^9$

## Partial Score

- In the test cases worth $300$ points, $-10 \leq X_i \leq 10$ and $-10 \leq Y_i \leq 10$ hold.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $:$
> 
> $X_N$ $Y_N$

## Output

If the condition can be satisfied, follow the following format. If the condition cannot be satisfied, print `-1`.

> $m$
> 
> $d_1$ $d_2$ $...$ $d_m$
> 
> $w_1$
> 
> $w_2$
> 
> $:$
> 
> $w_N$

$m$ and $d_i$ are the configurations of the robot arm. Refer to the problem statement for what each of them means.
Here, $1 \leq m \leq 40$ and $1 \leq d_i \leq 10^{12}$ must hold. Also, $m$ and $d_i$ must all be integers.

$w_j$ is a string of length $m$ that represents the way to bring Joint $m$ of the robot arm to point $(X_j, Y_j)$.
The $i$-th character of $w_j$ should be one of the letters `L`, `R`, `D` and `U`, representing the mode of Section $i$.

```input1
3
-1 0
0 3
2 -1
```

```output1
2
1 2
RL
UU
DR
```

In the given way to bring Joint $m$ of the robot arm to each $(X_j, Y_j)$, the positions of the joints will be as follows:

- To $(X_1, Y_1) = (-1, 0)$: First, the position of Joint $0$ is $(x_0, y_0) = (0, 0)$. As the mode of Section $1$ is `R`, the position of Joint $1$ is $(x_1, y_1) = (1, 0)$. Then, as the mode of Section $2$ is `L`, the position of Joint $2$ is $(x_2, y_2) = (-1, 0)$.
- To $(X_2, Y_2) = (0, 3)$: $(x_0, y_0) = (0, 0), (x_1, y_1) = (0, 1), (x_2, y_2) = (0, 3)$.
- To $(X_3, Y_3) = (2, -1)$: $(x_0, y_0) = (0, 0), (x_1, y_1) = (0, -1), (x_2, y_2) = (2, -1)$.

```input2
5
0 0
1 0
2 0
3 0
4 0
```

```output2
-1
```

```input3
2
1 1
1 1
```

```output3
2
1 1
RU
UR
```

There may be duplicated points among $(X_j, Y_j)$.

```input4
3
-7 -3
7 3
-3 -7
```

```output4
5
3 1 4 1 5
LRDUL
RDULR
DULRD
```