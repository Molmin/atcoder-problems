Score: $800$ points

## Problem Statement

<font color="red">**This is an interactive task.**</font>

We have $2N$ balls arranged in a row, numbered $1, 2, 3, ..., 2N$ from left to right, where $N$ is an odd number. Among them, there are $N$ red balls and $N$ blue balls.

While blindfolded, you are challenged to guess the color of every ball correctly, by asking at most $210$ questions of the following form:

- You choose any $N$ of the $2N$ balls and ask whether there are more red balls than blue balls or not among those $N$ balls.

Now, let us begin.

## Constraints

- $1 \leq N \leq 99$
- $N$ is an odd number.

## Input and Output

First, receive the number of balls of each color, $N$, from Standard Input:

```plain
$N$
```

Then, ask questions until you find out the color of every ball.
A question should be printed to Standard Output in the following format:

```plain
? $A_1$ $A_2$ $A_3$ $...$ $A_N$
```

This means that you are asking about the $N$ balls $A_1, A_2, A_3, ..., A_N$, where $1 \leq A_i \leq 2N$ and $A_i \neq A_j (i \neq j)$ must hold.

The response $T$ to this question will be given from Standard Input in the following format:

```plain
$T$
```

Here $T$ is one of the following strings:

- `Red`: Among the $N$ balls chosen, there are more red balls than blue balls.
- `Blue`: Among the $N$ balls chosen, there are more blue balls than red balls.
- `-1`: You printed an invalid question (including the case you asked more than $210$ questions), or something else that was invalid.

If the judge returns `-1`, your submission is already judged as incorrect. The program should immediately quit in this case.

When you find out the color of every ball, print your guess to Standard Output in the following format:

```plain
! $c_1$$c_2$$c_3$$...$$c_{2N}$
```

Here $c_i$ should be the character representing the color of Ball $i$; use `R` for red and `B` for blue.

## Notice

- <font color="red">**Flush Standard Output each time you print something.**</font> Failure to do so may result in `TLE`.
- Immediately terminate your program after printing your guess (or receiving the `-1` response). Otherwise, the verdict will be indeterminate.
- If your program prints something invalid, the verdict will be indeterminate.

## Sample Input and Output

   
       Input
       Output
   
   
       `3`
       
   
   
       
       `? 1 2 3`
   
   
       `Red`
       
   
   
       
       `? 2 4 6`
   
   
       `Blue`
       
   
   
       
       `! RRBBRB`
   

In this sample, $N = 3$, and the colors of Ball $1, 2, 3, 4, 5, 6$ are red, red, blue, blue, red, blue, respectively.

- In the first question, there are two red balls and one blue ball among the balls $1, 2, 3$, so the judge returns `Red`.
- In the second question, there are one red ball and two blue balls among the balls $2, 4, 6$, so the judge returns `Blue`.