Score : $500$ points

## Problem Statement

There is an integer sequence $S$ of length $N$. Initially, all elements of $S$ are $0$.

You are also given two integer sequences of length $Q$: $P=(P_1,P_2,\dots,P_Q)$ and $V=(V_1,V_2,\dots,V_Q)$.

Snuke wants to perform $Q$ operations on the sequence $S$ in order. The $i$-th operation is as follows:

- Perform one of the following:-   - Replace each of the elements $S_1, S_2, \dots, S_{P_i}$ with $V_i$. However, before this operation, if there is an element among $S_1, S_2, \dots, S_{P_i}$ that is strictly greater than $V_i$, Snuke will start crying.
-   - Replace each of the elements $S_{P_i}, S_{P_i+1}, \dots, S_N$ with $V_i$. However, before this operation, if there is an element among $S_{P_i}, S_{P_i+1}, \dots, S_N$ that is strictly greater than $V_i$, Snuke will start crying.

Find the number of sequences of $Q$ operations where Snuke can perform all operations without crying, modulo $998244353$.

Two sequences of operations are distinguished if and only if there is $1 \leq i \leq Q$ such that the choice for the $i$-th operation is different.

## Constraints

- $2 \leq N \leq 5000$
- $1 \leq Q \leq 5000$
- $1 \leq P_i \leq N$
- $1 \leq V_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $P_1$ $V_1$
> 
> $P_2$ $V_2$
> 
> $\vdots$
> 
> $P_Q$ $V_Q$

## Output

Print the answer as an integer.

```input1
8 3
1 8
8 1
2 1
```

```output1
1
```

Snuke can perform the three operations without crying as follows:

- Replace $S_1$ with $8$.
- Replace $S_8$ with $1$.
- Replace $S_2, S_3, \dots, S_8$ with $1$.

No other sequences of operations satisfy the conditions, so the answer is $1$. For example, if he replaces $S_1, S_2, \dots, S_8$ with $8$ in the first operation, he will cry in the second operation regardless of the choice.

```input2
8 3
8 1
1 8
1 2
```

```output2
0
```

No matter how he performs the first two operations, he will cry in the third operation.

```input3
241 82
190 3207371
229 3639088
61 4428925
84 17258698
34 42692503
207 59753183
180 67198566
78 99285033
60 102449991
234 122146510
111 126959145
141 152331579
78 159855439
11 169658471
22 189991287
37 204602946
73 209329065
72 215363269
152 236450854
175 237822921
22 261431608
144 252550201
54 268889550
238 276997357
69 313065279
226 330144323
6 335788783
126 345410019
220 348318997
166 365778763
142 382251905
200 406191336
234 392702679
83 409660987
183 410908761
142 445707116
205 470279207
230 486436406
156 494269002
113 495687706
200 500005738
162 505246499
201 548652987
86 449551554
62 459527873
32 574001635
230 601073337
175 610244315
174 613857555
181 637452273
158 637866397
148 648101378
172 646898076
144 682578257
239 703460335
192 713255331
28 727075136
196 730768166
111 751850547
90 762445737
204 762552166
72 773170159
240 803415865
32 798873367
195 814999380
72 842641864
125 851815348
116 858041919
200 869948671
195 873324903
5 877767414
105 877710280
150 877719360
9 884707717
230 880263190
88 967344715
49 977643789
167 979463984
70 981400941
114 991068035
94 991951735
141 995762200
```

```output3
682155965
```

Remember to take the count modulo $998244353$.