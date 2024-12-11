Score : $400$ points

## Problem Statement

Kenkoooo is planning a trip in Republic of Snuke.
In this country, there are $n$ cities and $m$ trains running.
The cities are numbered $1$ through $n$, and the $i$-th train connects City $u_i$ and $v_i$ bidirectionally.
Any city can be reached from any city by changing trains.

Two currencies are used in the country: yen and snuuk.
Any train fare can be paid by both yen and snuuk.
The fare of the $i$-th train is $a_i$ yen if paid in yen, and $b_i$ snuuk if paid in snuuk.

In a city with a money exchange office, you can change $1$ yen into $1$ snuuk.
However, when you do a money exchange, you have to change all your yen into snuuk.
That is, if Kenkoooo does a money exchange when he has $X$ yen, he will then have $X$ snuuk.
Currently, there is a money exchange office in every city, but the office in City $i$ will shut down in $i$ years and can never be used in and after that year.

Kenkoooo is planning to depart City $s$ with $10^{15}$ yen in his pocket and head for City $t$, and change his yen into snuuk in some city while traveling.
It is acceptable to do the exchange in City $s$ or City $t$.

Kenkoooo would like to have as much snuuk as possible when he reaches City $t$ by making the optimal choices for the route to travel and the city to do the exchange.
For each $i=0,...,n-1$, find the maximum amount of snuuk that Kenkoooo has when he reaches City $t$ if he goes on a trip from City $s$ to City $t$ after $i$ years.
You can assume that the trip finishes within the year.

## Constraints

- $2 \leq n \leq 10^5$
- $1 \leq m \leq 10^5$
- $1 \leq s,t \leq n$
- $s \neq t$
- $1 \leq u_i &lt; v_i \leq n$
- $1 \leq a_i,b_i \leq 10^9$
- If $i\neq j$, then $u_i \neq u_j$ or $v_i \neq v_j$.
- Any city can be reached from any city by changing trains.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $n$ $m$ $s$ $t$
> 
> $u_1$ $v_1$ $a_1$ $b_1$
> 
> $:$
> 
> $u_m$ $v_m$ $a_m$ $b_m$

## Output

Print $n$ lines.
In the $i$-th line, print the maximum amount of snuuk that Kenkoooo has when he reaches City $t$ if he goes on a trip from City $s$ to City $t$ after $i-1$ years.

```input1
4 3 2 3
1 4 1 100
1 2 1 10
1 3 20 1
```

```output1
999999999999998
999999999999989
999999999999979
999999999999897
```

After $0$ years, it is optimal to do the exchange in City $1$.<br>
After $1$ years, it is optimal to do the exchange in City $2$.<br>
Note that City $1$ can still be visited even after the exchange office is closed.
Also note that, if it was allowed to keep $1$ yen when do the exchange in City $2$ and change the remaining yen into snuuk, we could reach City $3$ with $999999999999998$ snuuk, but this is NOT allowed.<br>
After $2$ years, it is optimal to do the exchange in City $3$.<br>
After $3$ years, it is optimal to do the exchange in City $4$.
Note that the same train can be used multiple times.

```input2
8 12 3 8
2 8 685087149 857180777
6 7 298270585 209942236
2 4 346080035 234079976
2 5 131857300 22507157
4 8 30723332 173476334
2 6 480845267 448565596
1 4 181424400 548830121
4 5 57429995 195056405
7 8 160277628 479932440
1 6 475692952 203530153
3 5 336869679 160714712
2 7 389775999 199123879
```

```output2
999999574976994
999999574976994
999999574976994
999999574976994
999999574976994
999999574976994
999999574976994
999999574976994
```