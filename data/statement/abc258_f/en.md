Score : $500$ points

## Problem Statement

The roads in the Kingdom of AtCoder, which lies on the xy-plane, are the lines $x=n$ and $y=n$ for all integers $n$.
Among them, the lines $x=Bn$ and $y=Bn$ for all integers $n$ are main roads.

When Takahashi is at $(x,y)$, he can move to $(x,y-1)$, $(x,y+1)$, $(x+1,y)$, or $(x-1,y)$.
Each move takes $1$ second along a main road and $K$ seconds otherwise.

Find the minimum number of seconds Takahashi needs to get from $(S_x, S_y)$ to $(G_x, G_y)$.

You will have $T$ test cases to solve.

## Constraints

- $1 \le T \le 2 \times 10^5$
- $1 \le B,K \le 10^9$
- $0 \le S_x,S_y,G_x,G_y \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{testcase}_1$
> 
> $\mathrm{testcase}_2$
> 
> $\vdots$
> 
> $\mathrm{testcase}_T$

Each test case is in the following format:

> $B$ $K$ $S_x$ $S_y$ $G_x$ $G_y$

## Output

Print $T$ lines. The $i$-th line should contain the answer to the $i$-th test case.

```input1
4
3 4 2 2 4 4
5 6 2 3 2 3
1 1000000000 0 0 1000000000 1000000000
1000000000 1000000000 500000000 500000000 1000000000 1000000000
```

```output1
10
0
2000000000
500000000500000000
```

For the $1$-st test case, he can go from $(2,2)$ to $(2,3)$ in $4$ seconds, from $(2,3)$ to $(4,3)$ in $2$ seconds, and from $(4,3)$ to $(4,4)$ in $4$ seconds to get from $(2,2)$ to $(4,4)$ in $10$ seconds. It is impossible to get there in less than $10$ seconds, so the answer is $10$.<br>
For the $2$-nd test case, he is already at $(G_x, G_y)$ in the beginning, so the answer is $0$.

```input2
10
928184439 674654465 203937094 186855052 851783856 805293696
55480262 448852233 823161539 786348805 550018803 322680316
891870741 235679524 32164572 497841190 620600021 96487871
321502816 428964257 499656016 521484999 717623189 824784374
144040837 680268887 76238777 371138006 350230937 78690135
768922620 799628518 403830696 60449731 218880692 88319939
482031503 121412614 472330444 284479575 949635609 427232765
389524418 132987043 656496997 678732442 23028233 488463974
857778764 629964237 714551548 739330018 579247790 874251485
461612428 535402609 555160129 833592114 44418273 287363785
```

```output2
177606591118701316
6205925075792263
30320747646118343
84136273267803188
83764071874751489
118960470930399064
2929499649126153
16403238161749820
84995699148879437
71771264361119335
```