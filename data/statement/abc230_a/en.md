Score : $100$ points

## Problem Statement

AtCoder Grand Contest (AGC), a regularly held contest with a world authority, has been held $54$ times.

Just like the $230$-th ABC ― the one you are in now ― is called `ABC230`, the $N$-th AGC is initially named with a zero-padded $3$-digit number $N$. (The $1$-st AGC is `AGC001`, the $2$-nd AGC is `AGC002`, ...)

However, the latest $54$-th AGC is called `AGC055`, where the number is one greater than $54$. Because `AGC042` is canceled and missing due to the social situation, the $42$-th and subsequent contests are assigned numbers that are one greater than the numbers of contests held. (See also the explanations at Sample Inputs and Outputs.)

Here is the problem: given an integer $N$, print the name of the $N$-th AGC in the format `AGCXXX`, where `XXX` is the zero-padded $3$-digit number.

## Constraints

- $1 \leq N \leq 54$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the name of the $N$-th AGC in the specified format.

```input1
42
```

```output1
AGC043
```

As explained in Problem Statement, the $42$-th and subsequent AGCs are assigned numbers that are one greater than the numbers of contests.<br>
Thus, the $42$-th AGC is named `AGC043`.

```input2
19
```

```output2
AGC019
```

The $41$-th and preceding AGCs are assigned numbers that are equal to the numbers of contests.<br>
Thus, the answer is `AGC019`.

```input3
1
```

```output3
AGC001
```

As mentioned in Problem Statement, the $1$-st AGC is named `AGC001`.<br>
Be sure to pad the number with zeros into a $3$-digit number.

```input4
50
```

```output4
AGC051
```