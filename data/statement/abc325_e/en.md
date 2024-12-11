Score : $450$ points

## Problem Statement

There are $N$ cities in a certain country.<br>
You will travel from your office in city $1$ to a destination in city $N$, via zero or more cities.<br>
Two types of transportation are available: company car and train. The time required to travel from city $i$ to city $j$ is as follows:

- $D_{i,j} \times A$ minutes by company car, and
- $D_{i,j} \times B + C$ minutes by train.

You can switch from company car to train, but not vice versa.<br>
You can do so without spending time, but only in a city.

What is the minimum time in minutes to travel from city $1$ to city $N$?

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq A, B, C \leq 10^6$
- $D_{i,j} \leq 10^6$
- $D_{i,i} = 0$
- $D_{i,j} = D_{j,i} &gt; 0$ $(i \neq j)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$
> 
> $D_{1,1}$ $D_{1,2}$ $\ldots$ $D_{1,N}$
> 
> $D_{2,1}$ $D_{2,2}$ $\ldots$ $D_{2,N}$
> 
> $\vdots$
> 
> $D_{N,1}$ $D_{N,2}$ $\ldots$ $D_{N,N}$

## Output

Print the answer as an integer.

```input1
4 8 5 13
0 6 2 15
6 0 3 5
2 3 0 13
15 5 13 0
```

```output1
78
```

You can travel from city $1$ to city $4$ in a total of $78$ minutes by moving as follows.

- Travel by company car from city $1$ to city $3$. This takes $2 \times 8 = 16$ minutes.
- Travel by company car from city $3$ to city $2$. This takes $3 \times 8 = 24$ minutes.
- Travel by train from city $2$ to city $4$. This takes $5 \times 5 + 13 = 38$ minutes.

It is impossible to travel from city $1$ to city $4$ in less than $78$ minutes.

```input2
3 1 1000000 1000000
0 10 1
10 0 10
1 10 0
```

```output2
1
```

```input3
5 954257 954213 814214
0 84251 214529 10017 373342
84251 0 91926 32336 164457
214529 91926 0 108914 57762
10017 32336 108914 0 234705
373342 164457 57762 234705 0
```

```output3
168604826785
```