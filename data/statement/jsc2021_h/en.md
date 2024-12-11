Score : $600$ points

## Problem Statement

In the Republic of AtCoder, there are $N$ cities called City $1$ through City $N$ and $N$ canals called Canal $1$ through Canal $N$.<br>
Canal $i$ connects City $i$ and City $A_i$ bidirectionally, and you have to pay the toll of $C_i$ yen to go through it, but after paying the toll once, you can use it any number of times in any direction.<br>
It is guaranteed that you can reach from any city to any city using some canals.  

You are asked to deliver $M$ cargoes in this country. The $i$-th cargo should be delivered from City $X_i$ to City $Y_i$.<br>
There is no way other than using the canals to deliver the cargoes, but you yourself can travel between the cities freely without using the canals.

Find the minimum total toll you have to pay to deliver all $M$ cargoes.

## Constraints

- $3 \le N \le 2 \times 10^5$
- $1 \le M \le 2 \times 10^5$
- $1 \le A_i \le N$
- $A_i \neq i$
- $1 \le C_i \le 10^9$
- It is possible to reach from any city to any city by using some canals.
- $1 \le X_i \le N$
- $1 \le Y_i \le N$
- $X_i \neq Y_i$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $C_1$
> 
> $A_2$ $C_2$
> 
> $A_3$ $C_3$
> 
> $\hspace{13pt} \vdots$
> 
> $A_N$ $C_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $X_3$ $Y_3$
> 
> $\hspace{13pt} \vdots$
> 
> $X_M$ $Y_M$

## Output

Print the minimum total toll you have to pay, as an integer.

```input1
4 2
3 3
1 7
2 5
1 2
4 3
2 1
```

```output1
10
```

The figure below shows the cities and canals in this country, where numbers along the lines representing canals represent the tolls:<br>
![Figure](https://img.atcoder.jp/ghi/00d4990e6b1dd2b0c18ce27618430f91.png)  

You can deliver the cargoes as follows to make the total toll $10$ yen:

- The $1$-st cargo: use Canal $1, 4$ to deliver it on the route: City $4, 1, 3$.
- The $2$-nd cargo: use Canal $3, 1$ to deliver it on this route: City $2, 3, 1$.

```input2
5 2
2 2
5 5
5 7
2 4
3 10
3 5
4 1
```

```output2
13
```

Multiple canals may connect the same pair of cities.

```input3
11 4
8 1
9 9
8 10
8 3
1 2
11 3
9 2
6 5
3 4
1 7
3 2
7 8
10 1
4 9
11 6
```

```output3
26
```