Score: $600$ points

## Problem Statement

After being invaded by the Kingdom of AlDebaran, bombs are planted throughout our country, AtCoder Kingdom.

Fortunately, our military team called ABC has managed to obtain a device that is a part of the system controlling the bombs.

There are $N$ bombs, numbered $1$ to $N$, planted in our country. Bomb $i$ is planted at the coordinate $A_i$. It is currently activated if $B_i=1$, and deactivated if $B_i=0$.

The device has $M$ cords numbered $1$ to $M$. If we cut Cord $j$, the states of all the bombs planted between the coordinates $L_j$ and $R_j$ (inclusive) will be switched - from activated to deactivated, and vice versa.

Determine whether it is possible to deactivate all the bombs at the same time. If the answer is yes, output a set of cords that should be cut.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9\ (1 \leq i \leq N)$
- $A_i$ are pairwise distinct.
- $B_i$ is $0$ or $1$. $(1 \leq i \leq N)$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq L_j \leq R_j \leq 10^9\ (1 \leq j \leq M)$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $:$
> 
> $A_N$ $B_N$
> 
> $L_1$ $R_1$
> 
> $:$
> 
> $L_M$ $R_M$

## Output

If it is impossible to deactivate all the bombs at the same time, print `-1`. If it is possible to do so, print a set of cords that should be cut, as follows:

> $k$
> 
> $c_1$ $c_2$ $\dots$ $c_k$

Here, $k$ is the number of cords (possibly $0$), and $c_1, c_2, \dots, c_k$ represent the cords that should be cut. $1 \leq c_1 &lt; c_2 &lt; \dots &lt; c_k \leq M$ must hold.

```input1
3 4
5 1
10 1
8 0
1 10
4 5
6 7
8 9
```

```output1
2
1 4
```

There are two activated bombs at the coordinates $5, 10$, and one deactivated bomb at the coordinate $8$.

Cutting Cord $1$ switches the states of all the bombs planted between the coordinates $1$ and $10$, that is, all of the three bombs.

Cutting Cord $4$ switches the states of all the bombs planted between the coordinates $8$ and $9$, that is, Bomb $3$.

Thus, we can deactivate all the bombs by cutting Cord $1$ and Cord $4$.

```input2
4 2
2 0
3 1
5 1
7 0
1 4
4 7
```

```output2
-1
```

Cutting any set of cords will not deactivate all the bombs at the same time.

```input3
3 2
5 0
10 0
8 0
6 9
66 99
```

```output3
0
```

All the bombs are already deactivated, so we do not need to cut any cord.

```input4
12 20
536130100 1
150049660 1
79245447 1
132551741 0
89484841 1
328129089 0
623467741 0
248785745 0
421631475 0
498966877 0
43768791 1
112237273 0
21499042 142460201
58176487 384985131
88563042 144788076
120198276 497115965
134867387 563350571
211946499 458996604
233934566 297258009
335674184 555985828
414601661 520203502
101135608 501051309
90972258 300372385
255474956 630621190
436210625 517850028
145652401 192476406
377607297 520655694
244404406 304034433
112237273 359737255
392593015 463983307
150586788 504362212
54772353 83124235
```

```output4
5
1 7 8 9 11
```

If there are multiple sets of cords that deactivate all the bombs when cut, any of them can be printed.