Score: $400$ points

## Problem Statement

The Patisserie AtCoder sells cakes with number-shaped candles.
There are $X$, $Y$ and $Z$ kinds of cakes with $1$-shaped, $2$-shaped and $3$-shaped candles, respectively.
Each cake has an integer value called *deliciousness*, as follows:

- The deliciousness of the cakes with $1$-shaped candles are $A_1, A_2, ..., A_X$.
- The deliciousness of the cakes with $2$-shaped candles are $B_1, B_2, ..., B_Y$.
- The deliciousness of the cakes with $3$-shaped candles are $C_1, C_2, ..., C_Z$.

Takahashi decides to buy three cakes, one for each of the three shapes of the candles, to celebrate ABC 123.<br>
There are $X \times Y \times Z$ such ways to choose three cakes.<br>
We will arrange these $X \times Y \times Z$ ways in descending order of the sum of the deliciousness of the cakes.<br>
Print the sums of the deliciousness of the cakes for the first, second, $...$, $K$-th ways in this list.

## Constraints

- $1 \leq X \leq 1 \ 000$
- $1 \leq Y \leq 1 \ 000$
- $1 \leq Z \leq 1 \ 000$
- $1 \leq K \leq \min(3 \ 000, X \times Y \times Z)$
- $1 \leq A_i \leq 10 \ 000 \ 000 \ 000$
- $1 \leq B_i \leq 10 \ 000 \ 000 \ 000$
- $1 \leq C_i \leq 10 \ 000 \ 000 \ 000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $Z$ $K$
> 
> $A_1 \ A_2 \ A_3 \ ... \ A_X$
> 
> $B_1 \ B_2 \ B_3 \ ... \ B_Y$
> 
> $C_1 \ C_2 \ C_3 \ ... \ C_Z$

## Output

Print $K$ lines. The $i$-th line should contain the $i$-th value stated in the problem statement.

```input1
2 2 2 8
4 6
1 5
3 8
```

```output1
19
17
15
14
13
12
10
8
```

There are $2 \times 2 \times 2 = 8$ ways to choose three cakes, as shown below in descending order of the sum of the deliciousness of the cakes:

- $(A_2, B_2, C_2)$: $6 + 5 + 8 = 19$
- $(A_1, B_2, C_2)$: $4 + 5 + 8 = 17$
- $(A_2, B_1, C_2)$: $6 + 1 + 8 = 15$
- $(A_2, B_2, C_1)$: $6 + 5 + 3 = 14$
- $(A_1, B_1, C_2)$: $4 + 1 + 8 = 13$
- $(A_1, B_2, C_1)$: $4 + 5 + 3 = 12$
- $(A_2, B_1, C_1)$: $6 + 1 + 3 = 10$
- $(A_1, B_1, C_1)$: $4 + 1 + 3 = 8$

```input2
3 3 3 5
1 10 100
2 20 200
1 10 100
```

```output2
400
310
310
301
301
```

There may be multiple combinations of cakes with the same sum of the deliciousness. For example, in this test case, the sum of $A_1, B_3, C_3$ and the sum of $A_3, B_3, C_1$ are both $301$.
However, they are different ways of choosing cakes, so $301$ occurs twice in the output.

```input3
10 10 10 20
7467038376 5724769290 292794712 2843504496 3381970101 8402252870 249131806 6310293640 6690322794 6082257488
1873977926 2576529623 1144842195 1379118507 6003234687 4925540914 3902539811 3326692703 484657758 2877436338
4975681328 8974383988 2882263257 7690203955 514305523 6679823484 4263279310 585966808 3752282379 620585736
```

```output3
23379871545
22444657051
22302177772
22095691512
21667941469
21366963278
21287912315
21279176669
21160477018
21085311041
21059876163
21017997739
20703329561
20702387965
20590247696
20383761436
20343962175
20254073196
20210218542
20150096547
```

Note that the input or output may not fit into a $32$-bit integer type.