Score : $2100$ points

## Problem Statement

There are $N$ jewelry shops numbered $1$ to $N$.

Shop $i$ ($1 \leq i \leq N$) sells $K_i$ kinds of jewels.
The $j$-th of these jewels ($1 \leq j \leq K_i$) has a size and price of $S_{i,j}$ and $P_{i,j}$, respectively, and the shop has $C_{i,j}$ jewels of this kind in stock.

A jewelry box is said to be *good* if it satisfies all of the following conditions:

- For each of the jewelry shops, the box contains one jewel purchased there.
- All of the following $M$ restrictions are met.-   - Restriction $i$ ($1 \leq i \leq M$): $($The size of the jewel purchased at Shop $V_i$$)\leq ($The size of the jewel purchased at Shop $U_i$$)+W_i$

Answer $Q$ questions.
In the $i$-th question, given an integer $A_i$, find the minimum total price of jewels that need to be purchased to make $A_i$ good jewelry boxes. If it is impossible to make $A_i$ good jewelry boxes, report that fact.

## Constraints

- $1 \leq N \leq 30$
- $1 \leq K_i \leq 30$
- $1 \leq S_{i,j} \leq 10^9$
- $1 \leq P_{i,j} \leq 30$
- $1 \leq C_{i,j} \leq 10^{12}$
- $0 \leq M \leq 50$
- $1 \leq U_i,V_i \leq N$
- $U_i \neq V_i$
- $0 \leq W_i \leq 10^9$
- $1 \leq Q \leq 10^5$
- $1 \leq A_i \leq 3 \times 10^{13}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> Description of Shop $1$
> 
> Description of Shop $2$
> 
> $\vdots$
> 
> Description of Shop $N$
> 
> $M$
> 
> $U_1$ $V_1$ $W_1$
> 
> $U_2$ $V_2$ $W_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$ $W_M$
> 
> $Q$
> 
> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_Q$

The description of Shop $i$ ($1 \leq i \leq N$) is in the following format:

> $K_i$
> 
> $S_{i,1}$ $P_{i,1}$ $C_{i,1}$
> 
> $S_{i,2}$ $P_{i,2}$ $C_{i,2}$
> 
> $\vdots$
> 
> $S_{i,K_i}$ $P_{i,K_i}$ $C_{i,K_i}$

## Output

Print $Q$ lines.
The $i$-th line should contain the minimum total price of jewels that need to be purchased to make $A_i$ good jewelry boxes, or $-1$ if it is impossible to make them.

```input1
3
2
1 10 1
3 1 1
3
1 10 1
2 1 1
3 10 1
2
1 1 1
3 10 1
2
1 2 0
2 3 0
3
1
2
3
```

```output1
3
42
-1
```

Let $(i,j)$ represent the $j$-th jewel sold at Shop $i$.
The answer to each query is as follows:

- $A_1=1$: Making a box with $(1,2),(2,2),(3,1)$ costs $1+1+1=3$, which is optimal.
- $A_2=2$: Making a box with $(1,1),(2,1),(3,1)$ and another with $(1,2),(2,3),(3,2)$ costs $(10+10+1)+(1+10+10)=42$, which is optimal.
- $A_3=3$: We cannot make three good boxes.

```input2
5
5
86849520 30 272477201869
968023357 28 539131386006
478355090 8 194500792721
298572419 6 894877901270
203794105 25 594579473837
5
730211794 22 225797976416
842538552 9 420531931830
871332982 26 81253086754
553846923 29 89734736118
731788040 13 241088716205
5
903534485 22 140045153776
187101906 8 145639722124
513502442 9 227445343895
499446330 6 719254728400
564106748 20 333423097859
5
332809289 8 640911722470
969492694 21 937931959818
207959501 11 217019915462
726936503 12 382527525674
887971218 17 552919286358
5
444983655 13 487875689585
855863581 6 625608576077
885012925 10 105520979776
980933856 1 711474069172
653022356 19 977887412815
10
1 2 231274893
2 3 829836076
3 4 745221482
4 5 935448462
5 1 819308546
3 5 815839350
5 3 513188748
3 1 968283437
2 3 202352515
4 3 292999238
10
510266667947
252899314976
510266667948
374155726828
628866122125
628866122123
1
628866122124
510266667949
30000000000000
```

```output2
26533866733244
13150764378752
26533866733296
19456097795056
-1
33175436167096
52
33175436167152
26533866733352
-1
```