Score : $600$ points

## Problem Statement

The server in company A has a structure where $N$ devices numbered $1, 2, ..., N$ are connected with $N - 1$ cables.
The $i$-th cable connects Device $U_i$ and Device $V_i$.
Any two different devices are connected through some number of cables.

Each device $v$ ($1 \leq v \leq N$) has a non-zero integer $A_v$, which represents the following:

- If $A_v &lt; 0$, Device $v$ is a computer that consumes an electric power of $-A_v$.
- If $A_v &gt; 0$, Device $v$ is a battery that supplies an electric power of $A_v$.

You have decided to disconnect some number of cables (possibly zero) to disable the server.
When some cables are disconnected, the devices will be divided into some number of connected components.
The server will be disabled if all of these connected components satisfy one of the following conditions:

- There is no computer in the connected component. That is, $A_v$ is positive for every device $v$ that belongs to the connected component.
- There is not enough supply of electric power in the connected component. That is, the sum of $A_v$ over all devices $v$ that belong to the connected component is negative.

At least how many cables do you need to disconnect in order to disable the server?

## Constraints

- $1 \leq N \leq 5$ $000$
- $1 \leq |A_i| \leq 10^9$ ($1 \leq i \leq N$)
- $1 \leq U_i, V_i \leq N$ ($1 \leq i \leq N - 1$)
- $U_i \neq V_i$ ($1 \leq i \leq N - 1$)
- Any two different devices are connected through some number of cables.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $:$
> 
> $U_{N - 1}$ $V_{N - 1}$

## Output

Print the answer.

```input1
7
-2 7 5 6 -8 3 4
1 2
2 3
2 4
1 5
5 6
5 7
```

```output1
1
```

We should disconnect the cable connecting Device $1$ and Device $2$.

```input2
4
1 2 3 4
1 2
1 3
1 4
```

```output2
0
```

```input3
6
10 -1 10 -1 10 -1
1 2
2 3
3 4
4 5
5 6
```

```output3
5
```

```input4
8
-2 3 6 -2 -2 -5 3 2
3 4
7 6
6 2
8 2
5 3
1 8
3 7
```

```output4
3
```

```input5
10
3 4 9 6 1 5 -1 10 -10 -10
7 4
5 6
8 1
9 5
7 1
10 3
2 8
4 10
9 2
```

```output5
3
```