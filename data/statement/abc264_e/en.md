Score : $500$ points

## Problem Statement

A country has $N$ cities and $M$ power plants, which we collectively call places.<br>
The places are numbered $1,2,\dots,N+M$, among which Places $1,2,\dots,N$ are the cities and Places $N+1,N+2,\dots,N+M$ are the power plants.  

This country has $E$ power lines.  Power Line $i$ ($1 \le i \le E$) connects Place $U_i$ and Place $V_i$ bidirectionally.<br>
A city is said to be **electrified** if one can reach at least one of the power plants from the city using some power lines.

Now, $Q$ events will happen.  In the $i$-th ($1 \le i \le Q$) event, Power Line $X_i$ breaks, making it unusable.  Once a power line breaks, it remains broken in the succeeding events.

Find the number of electrified cities right after each events.

## Constraints

- All values in input are integers.
- $1 \le N,M$
- $N+M \le 2 \times 10^5$
- $1 \le Q \le E \le 5 \times 10^5$
- $1 \le U_i &lt; V_i \le N+M$
- If $i \neq j$, then $U_i \neq U_j$ or $V_i \neq V_j$.
- $1 \le X_i \le E$
- $X_i$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $E$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_E$ $V_E$
> 
> $Q$
> 
> $X_1$
> 
> $X_2$
> 
> $\vdots$
> 
> $X_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain the number of electrified cities right after the $i$-th event.

```input1
5 5 10
2 3
4 10
5 10
6 9
2 9
4 8
1 7
3 6
8 10
1 8
6
3
5
8
10
2
7
```

```output1
4
4
2
2
2
1
```

Initially, all cities are electrified.

- The $1$-st event breaks Power Line $3$ that connects Point $5$ and Point $10$.-   - Now City $5$ is no longer electrified, while $4$ cities remain electrified.
- The $2$-nd event breaks Power Line $5$ that connects Point $2$ and Point $9$.
- The $3$-rd event breaks Power Line $8$ that connects Point $3$ and Point $6$.-   - Now Cities $2$ and $3$ are no longer electrified, while $2$ cities remain electrified.
- The $4$-th event breaks Power Line $10$ that connects Point $1$ and Point $8$.
- The $5$-th event breaks Power Line $2$ that connects Point $4$ and Point $10$.
- The $6$-th event breaks Power Line $7$ that connects Point $1$ and Point $7$.-   - Now City $1$ is no longer electrified, while $1$ city remains electrified.