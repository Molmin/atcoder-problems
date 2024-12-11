Score : $600$ points

## Problem Statement

Given are $N$ pairs of integers $(x_i,y_i)$, numbered $1$ to $N$, and an integer $K$.<br>
List all pairs of integers $(p,q)$ that satisfy the conditions below, in the format specified in Output.

- $1 \le p &lt; q \le N$
- $\sqrt{(x_p-x_q)^2+(y_p-y_q)^2} \le K$

Here, it is guaranteed that there are at most $4 \times 10^5$ such pairs of integers.

## Constraints

- All values in input are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le K \le 1.5 \times 10^9$
- $0 \le x_i,y_i \le 10^9$
- There are at most $4 \times 10^5$ pairs of integers that should be listed.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Print the answer in the following format.

> $M$
> 
> $p_1$ $q_1$
> 
> $p_2$ $q_2$
> 
> $\vdots$
> 
> $p_M$ $q_M$

The first line should contain an integer $M$, representing the number of pairs of integers to be listed.<br>
The subsequent $M$ lines should contain the pairs of integers to be listed $(p_i,q_i)$ in **lexicographical order**, each in its own line, separated by a space.  <br>
Here, a pair of integers $(a,b)$ comes before a pair of integers $(c,d)$ if and only if one of the following conditions is satisfied.

- $a&lt;c$.
- $a=c$ and $b&lt;d$.

```input1
6 5
2 0
2 2
3 4
0 0
5 5
8 3
```

```output1
9
1 2
1 3
1 4
2 3
2 4
2 5
3 4
3 5
5 6
```

There are $9$ pairs of integers that satisfy the conditions, which should be printed in the specified format.<br>
$(1,2),(1,3),(1,4),(2,3),(2,4),(2,5),(3,4),(3,5),(5,6)$

```input2
2 1414213562
0 0
1000000000 1000000000
```

```output2
0
```

There may be zero pairs of integers that satisfy the conditions.

```input3
10 150
300 300
300 400
300 500
400 300
400 400
400 400
400 500
500 300
500 400
500 500
```

```output3
29
1 2
1 4
1 5
1 6
2 3
2 4
2 5
2 6
2 7
3 5
3 6
3 7
4 5
4 6
4 8
4 9
5 6
5 7
5 8
5 9
5 10
6 7
6 8
6 9
6 10
7 9
7 10
8 9
9 10
```

There may be pairs of integers $(i,j)$ ($i &lt; j$) such that $x_i=x_j$ and $y_i=y_j$.