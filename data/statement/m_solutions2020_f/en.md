Score: $600$ points

## Problem Statement

M-kun is a brilliant air traffic controller.

On the display of his radar, there are $N$ airplanes numbered $1, 2, ..., N$, all flying at the same altitude.<br>
Each of the airplanes flies at a constant speed of $0.1$ per second in a constant direction. The current coordinates of the airplane numbered $i$ are $(X_i, Y_i)$, and the direction of the airplane is as follows:

- if $U_i$ is `U`, it flies in the positive $y$ direction;
- if $U_i$ is `R`, it flies in the positive $x$ direction;
- if $U_i$ is `D`, it flies in the negative $y$ direction;
- if $U_i$ is `L`, it flies in the negative $x$ direction.

To help M-kun in his work, determine whether there is a pair of airplanes that will collide with each other if they keep flying as they are now.<br>
If there is such a pair, find the number of seconds after which the first collision will happen.<br>
We assume that the airplanes are negligibly small so that two airplanes only collide when they reach the same coordinates simultaneously.

## Constraints

- $1 \leq N \leq 200000$
- $0 \leq X_i, Y_i \leq 200000$
- $U_i$ is `U`, `R`, `D`, or `L`.
- The current positions of the $N$ airplanes, $(X_i, Y_i)$, are all distinct.
- $N$, $X_i$, and $Y_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$ $U_1$
> 
> $X_2$ $Y_2$ $U_2$
> 
> $X_3$ $Y_3$ $U_3$
> 
> $:$
> 
> $X_N$ $Y_N$ $U_N$

## Output

If there is a pair of airplanes that will collide with each other if they keep flying as they are now, print an integer representing the number of seconds after which the first collision will happen.<br>
If there is no such pair, print `SAFE`.

```input1
2
11 1 U
11 47 D
```

```output1
230
```

If the airplanes keep flying as they are now, two airplanes numbered $1$ and $2$ will reach the coordinates $(11, 24)$ simultaneously and collide.  

```input2
4
20 30 U
30 20 R
20 10 D
10 20 L
```

```output2
SAFE
```

No pair of airplanes will collide.

```input3
8
168 224 U
130 175 R
111 198 D
121 188 L
201 116 U
112 121 R
145 239 D
185 107 L
```

```output3
100
```