配点 : $800$ 点

## 問題文

正の偶数 $N$ が与えられます．
`A`,`B`,`C` のみからなる長さ $N$ の文字列 $s$ であって，次の条件を満たすものの個数を求めてください．

- 以下の操作を繰り返すことで，$s$ を空文字列へと変換できる．-   - $s$ の中で連続した $2$ 文字を選び，消す．ただし，選んだ $2$ 文字が `AB` または `BA` であってはいけない．

例えば，$N=4$ のとき，`ABBC` は条件をみたします．
`ABBC` →（ `BB` を消去）→ `AC` →（ `AC` を消去 ）→ 空文字列 と操作すれば良いです．

なお，答えは非常に大きくなることがあるので $998244353$ で割ったあまりを求めてください．

## 制約

- $2 \leq N \leq 10^7$
- $N$ は偶数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$

## 出力

条件をみたす文字列が何通りあるかを $998244353$ で割ったあまりを出力せよ．

```input1
2
```

```output1
7
```

$s=$`AB`,`BA` 以外の文字列は条件を満たします．

```input2
10
```

```output2
50007
```

```input3
1000000
```

```output3
210055358
```